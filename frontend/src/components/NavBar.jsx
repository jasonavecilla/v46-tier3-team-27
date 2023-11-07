import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";

import { FaBarsStaggered } from "react-icons/fa6";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { GiHotMeal } from "react-icons/gi";
import { AiOutlineFontSize } from "react-icons/ai";

import NavLinks from "./NavLinks";
import {
  getAllLikedDishes,
  getUserId,
} from "../Features/LikedDishes/likedDishSlice";

const themes = {
  synthwave: "synthwave",
  garden: "garden",
};

const getThemeFromLocalStorage = () => {
  return localStorage.getItem("theme") || "synthwave";
};

const toggleTheme = () => {
  const chosenTheme =
    getThemeFromLocalStorage() === "synthwave" ? "garden" : "synthwave";
  document.documentElement.setAttribute("data-theme", chosenTheme);
  localStorage.setItem("theme", chosenTheme);
  console.log(chosenTheme);
};

const NavBar = () => {
  const { amount } = useSelector((store) => store.likedDish);
  // set theme
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      getThemeFromLocalStorage()
    );
  });
  const { loginWithRedirect, user } = useAuth0();
  const navigate = useNavigate();
  const handleMenu = () => {
    if (!user) {
      return loginWithRedirect();
    }
    return navigate("/menu");
  };

  return (
    <nav className="bg-base-200">
      <div className="navbar align-element">
        <div className="navbar-start">
          {/* Title */}
          <NavLink
            to={"/"}
            className={"hidden lg:flex btn btn-primary text-3xl items-center"}
          >
            R
          </NavLink>
          {/* DROPDOWN */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="w-6 h-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          {/* THEME SETUP */}
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              defaultChecked={true}
              onChange={toggleTheme}
            />
            <BsSunFill className="w-4 h-4 swap-on" />
            <BsMoonFill className="w-4 h-4 swap-off" />
          </label>
          {/* MENU LINK */}
          <button
            to={"/menu"}
            className="ml-4 btn btn-ghost btn-circle btn-md"
            type="button"
            onClick={handleMenu}
          >
            <div className="indicator">
              <GiHotMeal className="w-6 h-6" />
              <span className="badge badge-sm badge-primary indicator-item z-0">
                {amount}
              </span>
            </div>
          </button>
          <div className="ml-4">
            <label htmlFor="drawer-font-setting" className="drawer-button btn">
              <AiOutlineFontSize className="w-6 h-6" />
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
