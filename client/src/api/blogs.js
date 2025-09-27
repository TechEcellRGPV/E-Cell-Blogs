import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api/posts`,
});

const getTokenHeader = () => {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const fetchBlogs = () => API.get("/", { headers: getTokenHeader() });
export const createBlog = (data) =>
  API.post("/", data, { headers: getTokenHeader() });
export const updateBlog = (id, data) =>
  API.put(`/${id}`, data, { headers: getTokenHeader() });
export const deleteBlog = (id) =>
  API.delete(`/${id}`, { headers: getTokenHeader() });
