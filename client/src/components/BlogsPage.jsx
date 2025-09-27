import React, { useEffect, useState } from "react";
import BlogPostCard from "./BlogPostCard.jsx";
import { fetchBlogs } from "../api/blogs.js";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const res = await fetchBlogs();
        const sorted = res.data.sort(
          (a, b) =>
            new Date(b.date || b.createdAt || b.publishedAt) -
            new Date(a.date || a.createdAt || a.publishedAt)
        );
        setBlogs(sorted);
      } catch (err) {
        console.error(err);
        alert("Failed to load blogs");
      }
    };
    loadBlogs();
  }, []);

  const visibleBlogs = blogs.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-[#0a0a2a] text-white px-6 md:px-20 py-10">
      <h1 className="text-3xl font-bold mb-8">All Blogs</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleBlogs.map((blog) => (
          <BlogPostCard key={blog._id} post={blog} />
        ))}
      </div>

      {visibleCount < blogs.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setVisibleCount(visibleCount + 6)}
            className="px-6 py-3 border-2 border-white rounded-full text-white font-semibold text-md transition-colors duration-300 hover:bg-gray-800 hover:text-blue-500 hover:border-blue-500"
          >
            Load More →
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogsPage;
