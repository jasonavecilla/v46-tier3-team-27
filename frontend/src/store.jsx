import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from "./Features/Recipes/recipeSlice";

export const store = configureStore({
  reducer: {
    recipes: recipeSlice,
  },
});
