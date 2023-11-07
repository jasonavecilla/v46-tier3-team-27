import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from "./Features/Recipes/recipeSlice";
import likedDishSlice from "./Features/LikedDishes/likedDishSlice";
import fontSlice from "./Features/Font/fontSlice";

export const store = configureStore({
  reducer: {
    recipes: recipeSlice,
    likedDish: likedDishSlice,
    font: fontSlice,
  },
});
