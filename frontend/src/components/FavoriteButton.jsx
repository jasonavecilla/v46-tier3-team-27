import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createLikedDish } from "../Features/LikedDishes/likedDishSlice";

const FavoriteButton = ({ dishId: id, recipe }) => {
  const { user } = useAuth0();
  const dispatch = useDispatch();
  const { recipes } = useSelector((store) => store.likedDish);
  //   const isLiked = recipes.map((recipe) => recipe.dishId === id);
  const handleSubmit = () => {
    if (!user) {
      return toast.error("Please Sign In First");
    }
    dispatch(createLikedDish({ userId: user.email, id, recipe }));
  };

  return (
    <label className="mt-2 btn btn-block swap swap-rotate">
      {/* this hidden checkbox controls the state */}
      <input type="checkbox" onChange={handleSubmit} />
      <AiFillHeart className="w-12 h-10 text-red-500 swap-on hover:text-red-400" />
      <AiOutlineHeart className="w-12 h-10 text-red-500 swap-off" />
    </label>
  );
};

export default FavoriteButton;
