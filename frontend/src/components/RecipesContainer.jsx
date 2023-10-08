import React, { useEffect } from "react";
import RecipesGrid from "./RecipesGrid";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes } from "../Features/Recipes/recipeSlice";
import Loading from "./Loading";

const RecipesContainer = () => {
  const { page, search, total, isLoading, recipes } = useSelector(
    (store) => store.recipes
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllRecipes());
    console.log(`page: ${page}`);
  }, [page, search]);

  return (
    <>
      {/* HEADERS */}
      <div className="flex items-center justify-between pb-5 mt-8 border-base-300">
        {total && <h4 className="font-medium text-md">{total} recipes</h4>}
      </div>
      {/* RECIPES */}
      <RecipesGrid recipes={recipes} />
    </>
  );
};

export default RecipesContainer;
