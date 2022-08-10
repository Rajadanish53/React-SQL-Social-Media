const express = require("express");
require("dotenv").config();
const cors = require("cors");
const serverless = require("serverless-http");
const app = express();

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
app.use("/api/products", productRouter);
app.use("/api/user", userRouter);
/// Testing api
app.get("/", (req, res) => {
  res.json({ message: "hello from api" });
});

//PORT
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
module.exports.handler = serverless(app);
