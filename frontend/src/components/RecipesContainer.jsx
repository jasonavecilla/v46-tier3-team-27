import React, { useEffect } from "react";
import RecipesGrid from "./RecipesGrid";
import { useDispatch } from "react-redux";
import { getAllRecipes } from "../Features/Recipes/recipeSlice";

const RecipesContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllRecipes());
  }, []);
  return (
    <>
      {/* HEADERS */}
      <div className="flex items-center justify-between pb-5 mt-8 border-base-300">
        <h4 className="font-medium text-md">200 recipes</h4>
      </div>
      {/* RECIPES */}
      <RecipesGrid />
    </>
  );
};

export default RecipesContainer;
