import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from "./Features/Recipes/recipeSlice";
import likedDishSlice from "./Features/LikedDishes/likedDishSlice";

export const store = configureStore({
  reducer: {
    recipes: recipeSlice,
    likedDish: likedDishSlice,
  },
});
