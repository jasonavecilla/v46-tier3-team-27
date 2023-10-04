require("dotenv").config();
require("express-async-errors");
const express = require("express");
const { connectDB } = require("./db/connect");
const errorHandler = require("./middlewares/error-handler");
const notFound = require("./middlewares/not-found");
const authMiddleware = require("./middlewares/auth");

const app = express();

//Swagger UI

//extra security packages

//middlewares

app.use(express.json());

//routes
app.get("/", (req, res) => res.send(` Recipes API`));
// All Routes

//not found
app.use(notFound);
//error handler
app.use(errorHandler);
const port = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectDB();
    app.listen(port, console.log(`server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
