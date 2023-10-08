const express = require("express");
const router = express.Router();
const {
  popularRecipes,
  getAllRecipes,
  getSingleRecipe,
} = require("../controllers/recipeController");

router.route("/").get(getAllRecipes);
router.route("/popularRecipes").get(popularRecipes);
router.route("/:id").get(getSingleRecipe);

module.exports = router;
