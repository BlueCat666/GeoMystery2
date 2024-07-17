import React from "react";
import { NavLink } from "react-router-dom";

export default function NavItem({ to, children, customClass }) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `block py-2 px-3 rounded ${
            isActive ? "bg-customPurple text-customWhite" : "md:hover:bg-customGray text-customWhite"
          } ${customClass}`
        }
        aria-current={to === window.location.pathname ? "page" : undefined}
      >
        {children}
      </NavLink>
    </li>
  );
}
