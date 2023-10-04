import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../components";

const HomeLayout = () => {
  return (
    <>
      <NavBar />
      <section className="py-20 align-element">
        <Outlet />
      </section>
    </>
  );
};

export default HomeLayout;
