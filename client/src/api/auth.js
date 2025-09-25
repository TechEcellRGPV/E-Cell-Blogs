// src/api/auth.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5173" 
});

export const loginUser = async (email, password) => {
  return API.post("http://localhost:5000/api/auth/login", { email, password });
};
