import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom";

export default function DropdownButton() {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 100); // Adjust the delay as needed
  };

  return (
    <div className="py-2 px-3 text-customWhite md:hover:bg-customGray rounded relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button
        type="button"
        className="flex items-center"
        id="options-menu"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        Admin Panel
        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-5 w-48 rounded-md shadow-lg bg-customBlack border border-customBorder text-customWhite">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <Link to="/players" className="block px-4 py-2 text-sm hover:bg-customGray" role="menuitem">Player List</Link>
            <Link to="/" className="block px-4 py-2 text-sm hover:bg-customGray" role="menuitem">Option 2</Link>
            <Link to="/" className="block px-4 py-2 text-sm hover:bg-customGray" role="menuitem">Option 3</Link>
          </div>
        </div>
      )}
    </div>
  );
}
