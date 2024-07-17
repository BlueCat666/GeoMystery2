import React from "react";
import { useAuth } from "../../../contexts/AuthContext";

export default function LogoutBtn() {
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      // Optionally, redirect or perform other actions after logout
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <li>
      <button
        onClick={handleLogout}
        className="text-red-700/80 block py-2 px-3 rounded md:hover:bg-customGray"
      >
        Log Out
      </button>
    </li>
  );
}
