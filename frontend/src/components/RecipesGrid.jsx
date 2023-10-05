import React, { useState } from 'react';
import { popularRecipes } from "../utils/testData";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdOutlineTimer } from 'react-icons/md';
import { Link } from "react-router-dom";

const RecipesGrid = () => {
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (show_id) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [show_id]: !prevFavorites[show_id] || false,
    }));
  };

  return (
    <div className="grid gap-4 pt-12 md:grid-cols-2 lg:grid-cols-3">
      {popularRecipes.map((product) => {
        const { thumbnail_url, name, show_id, description, total_time_tier } = product;

        return (
          <Link
            key={show_id}
            className="relative w-full transition duration-300 shadow-xl hover:shadow-2xl rounded-xl overflow-hidden"
          >
            <figure className="px-4 pt-4 relative">
              <img
                src={thumbnail_url}
                alt={name}
                className="object-cover w-full h-64 md:h-48 rounded-xl"
              />
              <div className="absolute bottom-2 right-6" onClick={() => toggleFavorite(show_id)}>
                <label className="swap swap-rotate bg-white p-2 rounded-full shadow-xl">
                  <input type="checkbox" checked={favorites[show_id] || false} readOnly />
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
              <div className="flex items-center mt-2">
                <MdOutlineTimer className="w-4 h-4 text-red-500 mr-2" />
                {/* should use the total_time_minutes */}
                <span>{total_time_tier.display_tier}</span>
              </div>
              <span className='text-secondary mt-2'>{description.substring(0, 10)}</span>
            </div>

          </Link>
        );
      })}
    </div>
  );
};

export default RecipesGrid;
