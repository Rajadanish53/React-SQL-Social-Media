const db = require("../models");
const bcrypt = require("bcryptjs");
const Token = require("../services/Token");
const ErrorHandler = require("../services/ErrorHandler");
const jwt = require("jsonwebtoken");
module.exports = {
  async createNewUser(req, res) {
    const { userName, email, password } = req.body;
    if (!userName || !email || !password) {
      const error = ErrorHandler.MissingFields();

      res.status(error.status).send(error.error);
    } else {
      //check if user aleady with that email exists or not
      const count = await db.user.count({ where: { email } });

      if (count === 0) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const finalModel = { ...req.body, password: hashedPassword };
        db.user
          .create(finalModel)
          .then((newUser) => {
            // const token = Token.generateToken(newUser.dataValues);
            const { id } = newUser.dataValues;
            const token = jwt.sign({ id }, process.env.JWT_SECRET);
            res.status(201).send({ token });
          })
          .catch((err) => {
            console.log(err);
            const error = ErrorHandler.MissingFields();
            res.status(error.status).send(error.error);
          });
      } else {
        const error = ErrorHandler.MissingFields(
          `User with email ${email} already exists !`
        );
        res.status(error.status).send(error.error);
      }
    }
  },
  async loginUser(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
      const error = ErrorHandler.ValidationError();
      return res.status(error.status).send(error.error);
    }
  },
};
