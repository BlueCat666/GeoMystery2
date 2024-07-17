import axios from "axios";

const API_URL = "https://roblox-testing.onrender.com";
// const API_URL = "http://localhost:3000";

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchServers = async () => {
  const response = await apiClient.get("/players");
  return response.data;
};

export const fetchGameData = async () => {
    const response = await apiClient.get("/get-game-data");
    return response.data;
  };


