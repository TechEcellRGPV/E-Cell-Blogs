// src/api/blogs.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api/posts",
});

const getTokenHeader = () => {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const fetchBlogs = () => API.get("/", { headers: getTokenHeader() });
export const createBlog = (data) => API.post("/", data, { headers: getTokenHeader() });
export const updateBlog = (id, data) => API.put(`/${id}`, data, { headers: getTokenHeader() });
export const deleteBlog = (id) => API.delete(`/${id}`, { headers: getTokenHeader() });
