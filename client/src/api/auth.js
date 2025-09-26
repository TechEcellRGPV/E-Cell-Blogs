// src/api/auth.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000",
});

export const loginUser = async (email, password) => {
  return API.post("/auth/login", { email, password });
};
