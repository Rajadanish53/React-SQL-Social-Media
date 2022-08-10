const jwt = require("jsonwebtoken");

class Token {
  generateToken = (data) => {
    const { id } = data;
    const token = jwt.sign({ id }, process.env.JWT_SECRET);
    return token;
  };
}
module.exports = new Token();
