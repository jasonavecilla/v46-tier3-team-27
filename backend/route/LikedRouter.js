const express = require("express");
const router = express.Router();
const {
  getAllLikedDishes,
  createLikedDishes,
  deleteLikedDishes,
} = require("..//controllers/LikedDishesController");
router.route("/").get(getAllLikedDishes).post(createLikedDishes);
router.route("/:id").delete(deleteLikedDishes);

module.exports = router;
