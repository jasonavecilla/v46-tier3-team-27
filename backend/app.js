require("dotenv").config();
require("express-async-errors");
const express = require("express");
const { connectDB } = require("./db/connect");
const errorHandler = require("./middlewares/error-handler");
const notFound = require("./middlewares/not-found");
const authMiddleware = require("./middlewares/auth");
const recipeRouter = require("./route/recipeRouter");
const likedDishesRouter = require("./route/LikedRouter");
const app = express();

//Swagger UI

//extra security packages
const cors = require("cors");
//middlewares
app.use(cors());
app.use(express.json());

//routes
app.get("/", (req, res) => res.send(` Recipes API`));
// All Routes

// Recipes Route
app.use("/api/v1/recipes", recipeRouter);
// Liked Dishes Route
app.use("/api/v1/likedDishes", likedDishesRouter);
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
