import React from "react";
import { Link } from "react-router-dom";
import gameLogo from "../assets/gameLogo.png"; // Import the logo file correctly

export default function Logo() {
  return (
    <Link to="/" className="flex items-center space-x-3">
      <img
        src={gameLogo}
        className="h-10"
        alt="Flowbite Logo"
      />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
        GM2
      </span>
    </Link>
  );
}
