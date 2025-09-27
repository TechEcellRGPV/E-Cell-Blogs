import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const loginUser = async (email, password) => {
  return API.post("/api/auth/login", { email, password });
};
