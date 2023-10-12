const { StatusCodes } = require("http-status-codes");
const { customFetch } = require("../db/axios");
const { BadRequest, NotFound } = require("../errors");
const getAllRecipes = async (req, res) => {
  const limit = req.query.limit || 20;
  const { search } = req.query;
  if (limit > 40) {
    throw new BadRequest(`Limit can't exceed 40`);
  }
  const page = req.query.page || 1;
  let paramsObject = {
    size: limit,
    from: (page - 1) * limit,
    sort: "approved_at:asc",
  };
  if (search) {
    paramsObject.q = search;
  }

  let data = await customFetch("list", paramsObject);
  if (!data) {
    throw new BadRequest(
      "You have exceeded the MONTHLY quota for Requests on your current plan, BASIC. Upgrade your plan at https://rapidapi.com/apidojo/api/tasty"
    );
  }
  const total = data.count;
  const pages = Math.ceil(total / 40);
  const recipes = data.results || [];
  const currentRecipesNum = recipes.length;

  res
    .status(StatusCodes.OK)
    .json({ success: true, total, currentRecipesNum, pages, recipes });
};
const getSingleRecipe = async (req, res) => {
  const { id } = req.params;
  let paramsObject = {
    id,
  };
  const data = await customFetch("get-more-info", paramsObject);
  if (!data) {
    throw new NotFound(`no recipe with id ${id}`);
  }
  const {
    thumbnail_url,
    name,
    total_time_tier,
    yields,
    instructions,
    tags,
    original_video_url,
    nutrition,
    user_ratings,
    total_time_minutes,
    prep_time_minutes,
    cook_time_minutes
  } = data;
  res.status(StatusCodes.OK).json({
    success: true,
    recipe: {
      thumbnail_url,
      id,
      name,
      yields,
      instructions,
      tags,
      original_video_url,
      nutrition,
      total_time_tier,
      user_ratings,
      total_time_minutes,
      prep_time_minutes,
      cook_time_minutes
    },
  });
};
const popularRecipes = async (req, res) => {
  let paramsObject = {
    is_one_top: true,
  };
  const data = await customFetch("list", paramsObject);
  if (!data) {
    throw new BadRequest(
      "You have exceeded the MONTHLY quota for Requests on your current plan, BASIC. Upgrade your plan at https://rapidapi.com/apidojo/api/tasty"
    );
  }
  const recipes = data.results;
  res.status(StatusCodes.OK).json({ recipes });
};

module.exports = { getAllRecipes, getSingleRecipe, popularRecipes };
