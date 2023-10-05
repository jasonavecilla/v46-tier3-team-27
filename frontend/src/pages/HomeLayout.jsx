import React from "react";
import { Outlet } from "react-router-dom";
import { Header, NavBar } from "../components";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <NavBar />
      <section className="py-20 align-element">
        <Outlet />
      </section>
    </>
  );
};

export default HomeLayout;
