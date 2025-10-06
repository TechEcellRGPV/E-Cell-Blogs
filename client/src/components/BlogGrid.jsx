import React, { useEffect, useState } from "react";
import BlogPostCard from "./BlogPostCard.jsx";
import { fetchBlogs } from "../api/blogs.js";
import { Link } from "react-router-dom";

const BlogGrid = ({ showAll = true }) => {
  const [blogs, setBlogs] = useState([]);

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

  const displayedBlogs = showAll ? blogs : blogs.slice(0, 3);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:px-16 2xl:px-0">
      {displayedBlogs.map((post) => (
        <BlogPostCard key={post._id} post={post} />
      ))}

      {/* Show "See All Blogs" button if only showing latest 3 */}
      {!showAll && blogs.length > 3 && (
        <div className="col-span-full flex justify-center mt-8">
          <Link
            to="/blogs"
            className="px-6 py-3 border-2 border-white rounded-full text-white font-semibold text-md transition-colors duration-300 hover:bg-gray-800 hover:text-blue-500 hover:border-blue-500"
          >
            See All Blogs →
          </Link>
        </div>
      )}
    </div>
  );
};

export default BlogGrid;
