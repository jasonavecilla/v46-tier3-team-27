import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  createLikedDish,
  deleteLikedDish,
} from "../Features/LikedDishes/likedDishSlice";

const FavoriteButton = ({ dishId, recipe }) => {
  const { user } = useAuth0();
  const dispatch = useDispatch();
  const { recipes } = useSelector((store) => store.likedDish);

  const isLiked = new Set(
    recipes.map((recipe) => Number(recipe.id) === Number(dishId))
  ).has(true);
  console.log(isLiked);
  const handleSubmit = () => {
    if (!user) {
      return toast.error("Please Sign In First");
    }
    if (isLiked) {
      return dispatch(deleteLikedDish(dishId));
    }
    return dispatch(createLikedDish({ userId: user.email, dishId, recipe }));
  };

  return (
    <label className="mt-2 btn btn-block swap swap-rotate">
      {/* this hidden checkbox controls the state */}
      <input type="checkbox" onChange={handleSubmit} defaultChecked={isLiked} />
      {isLiked ? (
        <AiFillHeart className="w-12 h-10 text-red-500  hover:text-red-400" />
      ) : (
        <AiOutlineHeart className="w-12 h-10 text-red-500 " />
      )}
    </label>
  );
};

export default FavoriteButton;
