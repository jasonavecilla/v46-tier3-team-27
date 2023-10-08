import React from "react";
import { useParams } from "react-router";
import { popularRecipes } from "../utils/testData";
import { Link } from "react-router-dom";
import { removeUnderScore } from "../utils/textUtils";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Player } from "video-react";
const SingleRecipe = () => {
  const { id } = useParams();
  const {
    thumbnail_url,
    name,

    yields,
    instructions,
    tags,
    original_video_url,
    nutrition,
  } = popularRecipes[12];
  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/recipes"}>Recipes</Link>
          </li>
          {/* <li>{name}</li> */}
        </ul>
      </div>
      {/* RECIPES */}
      <div className="grid mt-6 gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        <div>
          {/* VIDEO OR IMAGE */}
          {original_video_url ? (
            <Player
              src={original_video_url}
              poster={thumbnail_url}
              playsInline
            />
          ) : (
            <img
              src={thumbnail_url}
              alt={name}
              className="object-cover rounded-lg w-96 h-96 lg:w-full"
            />
          )}

          {/* TAGS */}
          <p className="mt-3 text-xl text-secondary">
            <span className="font-bold ">Tags:</span>{" "}
            {tags.map(
              (item, index) =>
                `${removeUnderScore(item.name)}${
                  index === tags.length - 1 ? "." : ", "
                }  `
            )}{" "}
          </p>
          {/* LIKE BTN */}
          <label className="mt-2 btn btn-block swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" />
            <AiFillHeart className="w-12 h-10 text-red-500 swap-on hover:text-red-400" />
            <AiOutlineHeart className="w-12 h-10 text-red-500 swap-off" />
          </label>
        </div>

        {/* RECIPE */}
        <div>
          <h1 className="text-3xl font-bold capitalize">{name}</h1>
          {Object.keys(nutrition).length > 0 ? (
            <h4 className="mt-2 text-xl font-bold ">
              Nutritional Facts:
              {Object.keys(nutrition).map((key, index) => {
                if (key !== "updated_at") {
                  return ` ${key}: ${nutrition[key]}${
                    Object.keys(nutrition).length - 1 === index ? "." : ","
                  }`;
                }
              })}
            </h4>
          ) : null}

          <p className="mt-3 text-xl">{yields} people</p>
          <p className="mt-6 leading-8">
            <h4 className="mb-2 text-xl font-bold">Instructions:</h4>
            <ul className="list-none">
              {instructions.map((step, index) => (
                <li key={index}> {`${index + 1}. ${step.display_text}`}</li>
              ))}
            </ul>
          </p>
          {/*  */}
        </div>
      </div>
    </section>
  );
};
export default SingleRecipe;