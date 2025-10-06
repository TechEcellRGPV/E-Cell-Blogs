import React from "react";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPostCard = ({ post }) => {
  // Format date
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

  // Tags
  const tagArray = Array.isArray(post.tags)
    ? post.tags
    : post.tags?.split(",").map((t) => t.trim()) || [];
  const tagsArray = tagArray.slice(0, 3);

  const authorName = post.author?.name || "Unknown Author";

  return (
    <Link
      to={`/blog/${post._id}`}
      className="group rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 md:min-h-[500px] flex flex-col"
    >
      {/* Image */}
      <div className="relative h-48">
        <img
          className="w-full h-full object-cover"
          src={post.image || "/placeholder.png"}
          alt={post.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
      </div>

      {/* Card body */}
      <div className="p-6 bg-gray-900 flex flex-col flex-1 justify-between">
        {/* Top section: Title + Tags */}
        <div>
          <div className="font-bold text-2xl mb-2 leading-tight">{post.title}</div>

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

        {/* Bottom section: Author + Date */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-3">
            <img
              className="w-10 h-10 rounded-full"
              src="./logo.png"
              alt={authorName}
            />
            <div className="flex flex-col">
              <p className="font-semibold text-white">{authorName}</p>
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <span className="bg-green-900 text-green-500 rounded-full p-[2px] flex items-center justify-center">
                  <Check className="w-3 h-3" />
                </span>
                Verified writer
              </div>
            </div>
          </div>
          <p className="text-gray-400 text-sm">{formattedDate}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogPostCard;
