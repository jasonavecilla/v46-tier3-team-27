import { Helmet } from "react-helmet";
import { Filters, PaginationContainer, RecipesContainer } from "../components";

const Recipes = () => {
  return (
    <>
      <Helmet>
        <title>Recipes - Recipe App</title>
      </Helmet>
      <Filters />
      <RecipesContainer />
      <PaginationContainer />
    </>
  );
};

export default Recipes;
