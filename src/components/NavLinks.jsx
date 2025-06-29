import React from "react";
import { NavLink } from "react-router-dom";

export default function NavLinks({ links, activeClass, inactiveClass }) {
  return (
    <>
      {links.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
        >
          {label}
        </NavLink>
      ))}
    </>
  );
}
