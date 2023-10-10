import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { NavLink } from "react-router-dom";
const links = [
  { id: 1, url: "/", text: "home" },
  { id: 2, url: "about", text: "about" },
  { id: 3, url: "recipes", text: "recipes" },
  { id: 4, url: "menu", text: "menu" },
  // { id: 5, url: 'checkout', text: 'checkout' },
  // { id: 6, url: 'orders', text: 'orders' },
];
const NavLinks = () => {
  const { user } = useAuth0();
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        if (!user && url === "menu") return;
        return (
          <li key={id}>
            <NavLink className="capitalize" to={url}>
              {" "}
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
