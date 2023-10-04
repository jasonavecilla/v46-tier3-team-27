import React from "react";
import { NavLink } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { GiHotMeal } from "react-icons/gi";
import NavLinks from "./NavLinks";
const NavBar = () => {
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
            <input type="checkbox" defaultChecked={true} />
            <BsSunFill className="w-4 h-4 swap-on" />
            <BsMoonFill className="w-4 h-4 swap-off" />
          </label>
          {/* MENU LINK */}
          <NavLink
            to={"/menu"}
            className="ml-4 btn btn-ghost btn-circle btn-md"
          >
            <div className="indicator">
              <GiHotMeal className="w-6 h-6" />
              <span className="badge badge-sm badge-primary indicator-item">
                2
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
