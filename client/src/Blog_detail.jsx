// src/components/BlogDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogsData } from "./data/blogs";

// A simpler card for the sidebar to avoid nested Link issues or complex styling
const SidebarBlogCard = ({ post }) => {
  return (
    <Link 
      to={`/blog/${post.id}`} 
      className="flex items-center gap-3 cursor-pointer hover:bg-[#202050] p-2 rounded transition-colors mb-2"
    >
      <img
        src={post.imageURL || "/placeholder.svg"} // Use imageURL from your data
        alt={post.title}
        className="w-12 h-12 rounded-md object-cover"
      />
      <div>
        <p className="text-sm font-medium">{post.title}</p>
        <p className="text-xs text-gray-400">{post.date}</p>
      </div>
    </Link>
  );
};

export default function BlogDetail() {
  const { id } = useParams(); // Get the ID from the URL
  const blogId = parseInt(id);
  const post = blogsData.find(blog => blog.id === blogId);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0a0a2a] text-white px-6 md:px-20 py-10 flex justify-center items-center">
        <p className="text-xl">Blog post not found.</p>
      </div>
    );
  }

  // Get other blog posts for the sidebar (e.g., latest 3, excluding the current one)
  const sidebarBlogs = blogsData
    .filter(blog => blog.id !== blogId) 
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-[#0a0a2a] text-white px-6 md:px-20 py-10">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-400 mb-4">
        <Link to="https://ecellrgpv.com/" className="hover:underline">Home</Link> / 
        <Link to="/" className="hover:underline">Blog</Link> / {post.title}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Blog Content */}
        <div className="lg:col-span-3 bg-[#1a1a3a] p-4 rounded-lg">
          {/* Image */}
          <div className="rounded-lg overflow-hidden mb-6">
            <img
              src={post.imageURL} // Use imageURL from your post data
              alt={post.title}
              className="w-full rounded-lg"
            />
            {post.imageSource && ( // Assuming you have an imageSource in your blogData
                <p className="text-xs text-gray-400 mt-1">src: {post.imageSource}</p>
            )}
          </div>

          {/* Title and Date/Category */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            {post.title}
          </h1>
          <p className="text-gray-400 text-sm mb-4">{post.category} | {post.date}</p>


          {/* Content */}
          <div className="space-y-6 text-gray-200 leading-relaxed">
            {post.content && typeof post.content === 'string' ? (
                // If content is a simple string, display it in a paragraph
                <p>{post.content}</p>
            ) : post.content && Array.isArray(post.content) ? (
                // If content is an array of paragraphs/sections, map over them
                post.content.map((section, index) => (
                    <div key={index}>
                        {section.heading && <h2 className="text-2xl font-bold mt-8">{section.heading}</h2>}
                        {section.paragraph && <p>{section.paragraph}</p>}
                    </div>
                ))
            ) : (
                <p>Blog content goes here...</p> // Fallback
            )}
            
           
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-[#10103a] p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3">Latest Articles</h3>
            {sidebarBlogs.map((blog) => (
              <SidebarBlogCard key={blog.id} post={blog} />
            ))}

            {/* Tags section - You can make this dynamic based on the current post's tags */}
            {/* Keeping it static for now as per your original request */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-600 px-3 py-1 rounded-md text-xs">
                  {post.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}