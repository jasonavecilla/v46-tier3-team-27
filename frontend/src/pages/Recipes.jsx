import React from "react";
import { Filters, PaginationContainer, RecipesContainer } from "../components";

const Recipes = () => {
  return (
    <>
      <Filters />
      <RecipesContainer />
      <PaginationContainer />
    </>
  );
};

export default Recipes;
