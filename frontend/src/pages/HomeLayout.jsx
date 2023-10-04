import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../components";

const HomeLayout = () => {
  return (
    <>
      <NavBar />
      <section className="py-20">
        <Outlet />
      </section>
    </>
  );
};

export default HomeLayout;
