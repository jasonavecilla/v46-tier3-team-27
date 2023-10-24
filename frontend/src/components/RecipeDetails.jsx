import React from "react";
import { MdOutlineTimer } from "react-icons/md";
import RatingStar from "../components/RatingStar";

function RecipeDetails({ recipe }) {
  const {
    name,
    total_time_minutes,
    prep_time_minutes,
    cook_time_minutes,
    yields,
    user_ratings,
  } = recipe;

  return (
    <div>
      <h1 className="text-3xl font-bold capitalize">{name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-8 gap-4 mt-3 font-bold sha">
        <div className="md:col-span-2 col-span-2 row-span-2 bg-base-300 rounded-lg flex md:flex-col items-center justify-center shadow-sm">
          <MdOutlineTimer className="md:w-20 w-12 h-20 p-2 text-red-500 align-middle" />
          <span>{`${total_time_minutes ?? 0} ${
            total_time_minutes > 1 ? "mins" : "min"
          }`}</span>
        </div>
        <div className="col-span-3 p-4 bg-base-300 rounded-lg text-center shadow-sm">
          {`Prep Time: ${prep_time_minutes ?? 0} ${
            prep_time_minutes > 1 ? "mins" : "min"
          }`}
        </div>
        <div className="col-span-3 p-4 bg-base-300 rounded-lg text-center shadow-sm">
          {`Cook Time: ${cook_time_minutes ?? 0} ${
            cook_time_minutes > 1 ? "mins" : "min"
          }`}
        </div>
        <div className="col-span-3 p-4 bg-base-300 rounded-lg text-center shadow-sm">
          {yields}
        </div>
        <div className="col-span-3 p-4 bg-base-300 rounded-lg text-center shadow-sm">
          <RatingStar user_ratings={user_ratings} w={6} h={6} />
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;
