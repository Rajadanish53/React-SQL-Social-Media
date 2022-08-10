const express = require("express");
require("dotenv").config();
const cors = require("cors");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();
const corsOptions = {
  origin: "http://localhost:8081",
};

// MiddleWares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routers
const productRouter = require("./routes/productRouter");
const userRouter = require("./routes/userRouter");
router.use("/products", productRouter);
router.use("/user", userRouter);
/// Testing api
router.get("/", (req, res) => {
  res.json({ message: "hello from api" });
});
app.use(`/.netlify/functions/api`, router);
//PORT
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
module.exports.handler = serverless(app);
