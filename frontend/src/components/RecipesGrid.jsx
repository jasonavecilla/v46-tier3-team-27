import React from "react";
import { popularRecipes } from "../utils/testData";
import { Link } from "react-router-dom";
const RecipesGrid = () => {
  return (
    <div className="grid gap-4 pt-12 md:grid-cols-2 lg:grid-cols-3">
      {popularRecipes.map((product) => {
        const { thumbnail_url, name, show_id, description } = product;

        return (
          <Link
            key={show_id}
            className="w-full transition duration-300 shadow-xl card hover:shadow-2xl"
          >
            <figure className="px-4 pt-4">
              <img
                src={thumbnail_url}
                alt={name}
                className="object-cover w-full h-64 rounded-xl md:h-48"
              />
            </figure>
            <div className="items-center text-center card-body">
              <h2 className="tracking-wider capitalize card-title">{name}</h2>
              {/* <span className='text-secondary'>{description.substring(0,10)}...</span> */}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default RecipesGrid;
