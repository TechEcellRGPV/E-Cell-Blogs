import React from "react";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPostCard = ({ post }) => {
  // Use createdAt from MongoDB timestamps
  const rawDate = post.createdAt || post.updatedAt;
  const dateObj = rawDate ? new Date(rawDate) : null;
  const formattedDate =
    dateObj && !isNaN(dateObj)
      ? dateObj.toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })
      : "Unknown";

  const tagsArray = Array.isArray(post.tags)
    ? post.tags
    : post.tags?.split(",").map((t) => t.trim()) || [];

  const authorName = post.author?.name || "Unknown Author";

  return (
    <Link
      to={`/blog/${post._id}`}
      className="relative group rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 h-full"
    >
      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          src={post.image || "/placeholder.png"}
          alt={post.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
      </div>

      <div className="p-6 bg-gray-900 rounded-b-xl flex flex-col justify-between h-full">
        <div>
          <div className="font-bold text-2xl mb-2 leading-tight">
            {post.title}
          </div>

          {tagsArray.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
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

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-4 p-[2px]"
              src="./logo.png"
              alt={authorName}
            />
            <div className="text-sm mt-4">
              <p className="font-semibold flex items-center">{authorName}</p>
              <p className="text-gray-400 text-xs mt-1 flex items-center gap-1">
                <span className="bg-green-900 text-green-500 rounded-full p-[4px] flex items-center justify-center">
                  <Check className="w-3 h-3" />
                </span>
                Verified writer
              </p>
            </div>
          </div>
          <p className="text-gray-400 text-sm">{formattedDate}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogPostCard;
