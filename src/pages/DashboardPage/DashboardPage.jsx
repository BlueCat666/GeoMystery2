import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
// import { Button } from 'react-bootstrap';

export default function Dashboard() {
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState("");

    async function handleLogout() {
        try {
            await logout();
            navigate("/login");
        } catch {
            setError("Failed to log out");
        }
    }

    return (
        <div>
            {error && <p>{error}</p>}
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}
