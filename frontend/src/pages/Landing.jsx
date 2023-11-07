import { Helmet } from "react-helmet";
import { FeaturedRecipes, Hero } from "../components";

const Landing = () => {
  return (
    <>
      <Helmet>
        <title>Home - Recipe App</title>
      </Helmet>
      <Hero />
      <FeaturedRecipes />
    </>
  );
};

export default Landing;
