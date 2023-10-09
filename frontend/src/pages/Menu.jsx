import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RecipesGrid from "../components/RecipesGrid";
import { getAllLikedDishes } from "../Features/LikedDishes/likedDishSlice";

const Menu = () => {
  const { recipes } = useSelector((store) => store.likedDish);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllLikedDishes());
  }, []);
  return (
    <div>
      <RecipesGrid recipes={recipes} />
    </div>
  );
};

export default Menu;
