import React, { useEffect, useRef } from "react";
import MenuButton from "./MenuButton";

const PlayerConfigCard = ({ playerDetails, onClose }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        onClose(); // Close the card when clicking outside
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        onClose(); // Close the card on Escape key press
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div
        ref={cardRef}
        className="flex xl:flex-1 flex-col gap-10 bg-customGray border p-4 rounded-2xl shadow-lg max-w-xl"
      >
        <div className="flex items-center gap-3">
          <img
            className="bg-customGray/80 h-28 w-28 rounded-full "
            src={playerDetails.headThumbnail}
          />
          <div className="">
            <h2 className="text-2xl text-customWhite">{playerDetails.Name}</h2>
            <h3 className="text-lg text-white/50">
              @{playerDetails.DisplayName}
            </h3>
            <p className="text-lg text-white/50">{playerDetails.UserID}</p>
          </div>
        </div>
        <div className="border-b-2 border-customWhite/70"></div>
        <div className="flex flex-col items-start gap-3">
            <MenuButton label="Ban" icon={<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.364 18.364C19.9926 16.7353 21 14.4853 21 12C21 7.02944 16.9706 3 12 3C9.51472 3 7.26472 4.00736 5.63604 5.63604M18.364 18.364C16.7353 19.9926 14.4853 21 12 21C7.02944 21 3 16.9706 3 12C3 9.51472 4.00736 7.26472 5.63604 5.63604M18.364 18.364L5.63604 5.63604" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>}/>
            <MenuButton label="Kick" icon={<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.364 18.364C19.9926 16.7353 21 14.4853 21 12C21 7.02944 16.9706 3 12 3C9.51472 3 7.26472 4.00736 5.63604 5.63604M18.364 18.364C16.7353 19.9926 14.4853 21 12 21C7.02944 21 3 16.9706 3 12C3 9.51472 4.00736 7.26472 5.63604 5.63604M18.364 18.364L5.63604 5.63604" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>}/>
        </div>
      </div>
    </div>
  );
};

export default PlayerConfigCard;
