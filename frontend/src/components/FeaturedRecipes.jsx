import React from "react";
import SectionTitle from "./SectionTitle";
import RecipesGrid from "./RecipesGrid";

const FeaturedRecipes = () => {
  return (
    <div className="pt-24">
      <SectionTitle text={"Most popular recipes"} />
      <RecipesGrid />
    </div>
  );
};

export default FeaturedRecipes;
