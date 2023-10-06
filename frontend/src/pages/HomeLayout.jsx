import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import { Header, Loading, NavBar } from "../components";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      <Header />
      <NavBar />

      {isLoading ? (
        <Loading />
      ) : (
        <section className="py-20 align-element">
          <Outlet />
        </section>
      )}
    </>
  );
};

export default HomeLayout;
