import React, { useEffect } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import { Footer, Header, Loading, NavBar } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

import { Drawer } from "../components";

import {
  getAllLikedDishes,
  getUserId,
} from "../Features/LikedDishes/likedDishSlice";

const HomeLayout = () => {
  const dispatch = useDispatch();
  const { user } = useAuth0();

  useEffect(() => {
    if (user) {
      dispatch(getUserId(user.email));
      dispatch(getAllLikedDishes());
    }
  });

  return (
    <>
      <Header />
      <NavBar />
      <Drawer />

      <section className="py-20 align-element">
        <Outlet />
      </section>

      <Footer />
    </>
  );
};

export default HomeLayout;
