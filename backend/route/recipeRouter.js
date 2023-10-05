const express = require("express");
const router = express.Router();
const {
  getAllRecipes,
  getSingleRecipe,
} = require("../controllers/recipeController");

router.route("/").get(getAllRecipes);
router.route("/:id").get(getSingleRecipe);
module.exports = router;
