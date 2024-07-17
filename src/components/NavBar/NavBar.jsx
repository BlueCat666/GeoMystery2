import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import DropdownButton from "./components/DdButton";
import Logo from "./components/Logo";
import NavItem from "./components/NavItem";
import { useAuth } from "../../contexts/AuthContext";
import LogoutBtn from "./components/LogoutBtn";


// import './NavBar.css'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(true);
  const { userRole, logout } = useAuth();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-customBlack border-b-2 border-customBorder">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <Logo/>
        <button
          onClick={toggleDropdown}
          data-collapse-toggle="navbar-multi-level"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-multi-level"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        {isOpen && (
          <div className="w-full md:block md:w-auto">
            <ul className="flex flex-col gap-2 font-medium p-1 mt-4 border border-customBorder rounded-lg md:border-none md:flex-row md:mt-0 md:gap-5">
              <NavItem to="/">Home</NavItem>
              <NavItem to="/discord">Discord</NavItem>
              {userRole === "admin" && ( // Conditionally render DropdownButton for admin role
                <li>
                  <DropdownButton />
                </li>
              )}
              <li>
                <div className="border flex border-customBorder h-full">

                </div>
              </li>
              <LogoutBtn/>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
