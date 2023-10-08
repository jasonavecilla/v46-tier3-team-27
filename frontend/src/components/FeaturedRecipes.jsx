import React, { useEffect } from "react";
import SectionTitle from "./SectionTitle";
import RecipesGrid from "./RecipesGrid";
import { useDispatch, useSelector } from "react-redux";
import { getPopularRecipes } from "../Features/Recipes/recipeSlice";

const FeaturedRecipes = () => {
  const { popularRecipes } = useSelector((store) => store.recipes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularRecipes());
  }, []);
  return (
    <div className="pt-24">
      <SectionTitle text={"Most popular recipes"} />
      <RecipesGrid recipes={popularRecipes} />
    </div>
  );
};

export default FeaturedRecipes;
