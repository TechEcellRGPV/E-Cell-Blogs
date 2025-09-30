"use client";
import React, { useEffect, useState } from "react";
import { fetchBlogs, deleteBlog } from "../api/blogs";
import AddBlogForm from "../components/BlogForm";

export default function AdminPanel() {
  const [blogs, setBlogs] = useState([]);
  const [editBlog, setEditBlog] = useState(null);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    loadBlogs();
  }, []);

  const showNotification = (message, type = "success") => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const loadBlogs = async () => {
    try {
      const res = await fetchBlogs();
      setBlogs(res.data);
    } catch (err) {
      console.error(err);
      showNotification("Failed to load blogs", "error");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this blog?")) return;
    try {
      await deleteBlog(id);
      showNotification("Blog deleted successfully");
      loadBlogs();
    } catch (err) {
      console.error(err);
      showNotification("Delete failed", "error");
    }
  };

  const handleEdit = (blog) => setEditBlog(blog);

  return (
    <div className="p-6 max-w-6xl mx-auto bg-[#0a0a2a] min-h-screen text-white">
      <h2 className="text-3xl font-bold mb-6">Admin Panel</h2>

      {/* Notification */}
      {notification && (
        <div
          className={`mb-4 p-3 rounded ${
            notification.type === "success"
              ? "bg-green-900 text-green-300"
              : "bg-red-900 text-red-300"
          }`}
        >
          {notification.message}
        </div>
      )}

      {/* Blog creation / editing form */}
      <AddBlogForm
        onBlogCreated={() => {
          loadBlogs();
          showNotification(editBlog ? "Blog updated!" : "Blog created!");
          setEditBlog(null);
        }}
        editBlog={editBlog}
      />

      {/* Blog list */}
      <h3 className="text-2xl font-semibold mb-4 mt-8">All Blogs</h3>
      {blogs.length === 0 ? (
        <p className="text-gray-400">No blogs available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog._id || blog.id}
              className="p-4 border border-slate-700 rounded-lg shadow hover:shadow-lg transition relative bg-slate-900"
            >
              {blog.image && (
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-40 object-cover rounded mb-3"
                />
              )}
              <h4 className="font-bold text-lg mb-2">{blog.title}</h4>
              <p className="text-gray-400 text-sm mb-3">
                {blog.content.substring(0, 100)}...
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(blog)}
                  className="flex-1 px-3 py-1 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(blog._id || blog.id)}
                  className="flex-1 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
