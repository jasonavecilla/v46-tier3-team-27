import React, { useState } from "react";
import { popularRecipes } from "../utils/testData";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdOutlineTimer } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "./Loading";

const RecipesGrid = ({ recipes = [] }) => {
  const [favorites, setFavorites] = useState({});
  const { isLoading } = useSelector((store) => store.recipes);
  const toggleFavorite = (show_id) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [show_id]: !prevFavorites[show_id] || false,
    }));
  };
  if (isLoading) {
    return <Loading />;
  }
  if (recipes.length === 0) {
    return (
      <div className="grid gap-4 pt-12 md:grid-cols-2 lg:grid-cols-3">
        <h1 className="text-xl font-bold">There is no recipe</h1>
      </div>
    );
  }
  return (
    <div className="grid gap-4 pt-12 md:grid-cols-2 lg:grid-cols-3">
      {recipes.map((recipe) => {
        const {
          thumbnail_url,
          name,
          id,
          show_id,
          description,
          total_time_tier,
        } = recipe;

        return (
          <Link
            to={`/recipes/${id}`}
            key={id}
            className="relative w-full overflow-hidden transition duration-300 shadow-xl hover:shadow-2xl rounded-xl"
          >
            <figure className="relative px-4 pt-4">
              <img
                src={thumbnail_url}
                alt={name}
                className="object-cover w-full h-64 md:h-48 rounded-xl"
              />
              <div
                className="absolute bottom-2 right-6"
                onClick={() => toggleFavorite(show_id)}
              >
                <label className="p-2 bg-white rounded-full shadow-xl swap swap-rotate">
                  <input
                    type="checkbox"
                    checked={favorites[show_id] || false}
                    readOnly
                  />
                  {favorites[show_id] ? (
                    <AiFillHeart className="w-6 h-6 text-red-500 hover:text-red-400 swap-on" />
                  ) : (
                    <AiOutlineHeart className="w-6 h-6 text-red-500 swap-off" />
                  )}
                </label>
              </div>
            </figure>

            <div className="flex flex-col p-4">
              <h2 className="text-lg font-bold tracking-wide capitalize">
                {name}
              </h2>
              {total_time_tier && (
                <div className="flex items-center mt-2">
                  <MdOutlineTimer className="w-4 h-4 mr-2 text-red-500" />
                  {/* should use the total_time_minutes */}
                  <span>{total_time_tier?.display_tier}</span>
                </div>
              )}
              <span className="mt-2 text-secondary">
                {/* {description?.substring(0, )} */}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default RecipesGrid;
