import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import { Footer, Header, Loading, NavBar } from "../components";
import { useSelector } from "react-redux";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <NavBar />

      <section className="py-20 align-element">
        <Outlet />
      </section>

      <Footer />
    </>
  );
};

export default HomeLayout;
