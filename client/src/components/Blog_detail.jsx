import React, { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchBlogs } from "../api/blogs.js";

export default function BlogDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [sidebarBlogs, setSidebarBlogs] = useState([]);


  const topRef = useRef(null);
   useEffect(() => {
    // Scroll to top of blog detail when the component mounts
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [post]);


  useEffect(() => {
    loadBlog();
  }, [id]);

  const loadBlog = async () => {
    try {
      const res = await fetchBlogs();
      const allBlogs = res.data;

      const blog = allBlogs.find((b) => b._id === id);
      setPost(blog);

      setSidebarBlogs(
        allBlogs
          .filter((b) => b._id !== id)
          .sort(
            (a, b) =>
              new Date(b.date || b.createdAt || b.publishedAt) -
              new Date(a.date || a.createdAt || a.publishedAt)
          )
          .slice(0, 3)
      );
    } catch (err) {
      console.error(err);
      alert("Failed to load blog");
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0a0a2a] text-white flex items-center justify-center">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  const tagsArray = Array.isArray(post.tags)
    ? post.tags
    : post.tags?.split(",").map((t) => t.trim()) || [];

  const formattedDate = new Date(
    post.date || post.createdAt || post.publishedAt
  ).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-[#0a0a2a] text-white px-6 md:px-20 py-10">
      {/* Breadcrumb */}
      <div ref={topRef} className="text-sm text-gray-400 mb-4">
              <Link to="https://ecellrgpv.com/" className="hover:underline">Home</Link> / 
              <Link to="/" className="hover:underline">Blog</Link> / {post.title}
            </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Blog */}
        <div  className="lg:col-span-3 bg-[#1a1a3a] p-6 rounded-lg space-y-6">
          <img
            src={post.image || "/placeholder.png"}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg"
          />
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <p className="text-gray-400 text-sm">{formattedDate}</p>

         

          <div
            className="text-gray-200 leading-relaxed prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 flex flex-col gap-4">
          <div className="bg-[#10103a] p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3">Latest Articles</h3>
            {sidebarBlogs.map((blog) => {
              const blogDate = new Date(
                blog.date || blog.createdAt || blog.publishedAt
              ).toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              });

              return (
                <>
                <Link
                  key={blog._id}
                  to={`/blog/${blog._id}`}
                  className="flex flex-col cursor-pointer hover:bg-[#202050] p-2 rounded transition-colors mb-2"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={blog.image || "/placeholder.png"}
                      alt={blog.title}
                      className="w-12 h-12 rounded-md object-cover"
                    />
                    <div>
                      <p className="text-sm font-medium">{blog.title}</p>
                      <p className="text-xs text-gray-400">{blogDate}</p>
                    </div>
                  </div>
                </Link>
                </>
              );
            })}

         
          </div>
          <div className="bg-[#10103a] p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3">Tags</h3>
             {tagsArray.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tagsArray.map((tag, i) => (
                <span
                  key={i}
                  className="bg-blue-600 text-white px-2 py-1 rounded text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}


    </div>
          
        </div>
        
      </div>
      
    </div>
  );
}
