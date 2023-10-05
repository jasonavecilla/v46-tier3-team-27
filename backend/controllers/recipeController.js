const { StatusCodes } = require("http-status-codes");
const { customFetch } = require("../db/axios");

const getAllRecipes = async (req, res) => {
  const data = await customFetch((endpoint = "list"));
  res.status(StatusCodes.OK).json({ msg: "all recipes", recipes: data });
};
const getSingleRecipe = async (req, res) => {
  const data = await customFetch((endpoint = "get-more-info"), (id = `8138`));
  res.status(StatusCodes.OK).json({ data });
};
module.exports = { getAllRecipes, getSingleRecipe };
