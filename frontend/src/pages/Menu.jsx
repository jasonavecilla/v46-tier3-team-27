import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RecipesGrid from "../components/RecipesGrid";
import { getAllLikedDishes } from "../Features/LikedDishes/likedDishSlice";
import { Loading } from "../components";

const Menu = () => {
  const { recipes, isLoading } = useSelector((store) => store.likedDish);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllLikedDishes());
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <RecipesGrid recipes={recipes} />
    </div>
  );
};

export default Menu;
