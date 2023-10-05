import React from "react";
import RecipesGrid from "./RecipesGrid";

const RecipesContainer = () => {
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
