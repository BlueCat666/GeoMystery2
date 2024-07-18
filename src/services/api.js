import axios from "axios";
import { getIdToken } from "../firebase";

const API_URL = "https://roblox-testing.onrender.com";
// const API_URL = "http://localhost:3000";

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(async (config) => {
  const idToken = await getIdToken();
  if (idToken) {
    config.headers.Authorization = `Bearer ${idToken}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export const fetchServers = async () => {
  const response = await apiClient.get("/players");
  return response.data;
};

export const fetchGameData = async () => {
    const response = await apiClient.get("/get-game-data");
    return response.data;
  };


