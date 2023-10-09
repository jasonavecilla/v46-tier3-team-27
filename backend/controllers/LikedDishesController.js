const LikedDish = require("../models/LikedDishes");
const { StatusCodes } = require("http-status-codes");
const { NotFound } = require("../errors");
const getAllLikedDishes = async (req, res) => {
  const likeDishes = await LikedDish.findAll({});

  res
    .status(StatusCodes.OK)
    .json({ success: true, amount: likeDishes.length, recipes: likeDishes });
};
const createLikedDishes = async (req, res) => {
  const likeDish = await LikedDish.create(req.body);
  res
    .status(StatusCodes.CREATED)
    .json({ msg: "Added to Favorite Dishes", recipe: likeDish });
};

const deleteLikedDishes = async (req, res) => {
  const { id } = req.params;
  const likeDish = await LikedDish.destroy({ where: { dishId: id } });
  if (!likeDish) {
    throw new NotFound(`no dish with id ${id}`);
  }
  res.status(StatusCodes.CREATED).json({ msg: "Removed Favorite Dish" });
};

module.exports = { getAllLikedDishes, createLikedDishes, deleteLikedDishes };
