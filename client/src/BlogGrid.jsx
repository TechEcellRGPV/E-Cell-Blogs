// src/components/BlogGrid.jsx
import React, { useState } from 'react';
import BlogPostCard from './BlogPostCard'; // Assuming path
import { blogsData } from './data/blogs';

const BlogGrid = () => {
  // State to control how many blogs to show
  const [showAll, setShowAll] = useState(false);

  // If showAll is true, show everything, else just recent
  const displayedBlogs = showAll ? blogsData : blogsData.slice(0, 3);

  return (
    <div className="min-h-screen bg-[#0a0a2a] text-white p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {displayedBlogs.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>

      {/* Show button only if not already showing all */}
      {!showAll && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-3 border-2 border-white rounded-full text-white font-semibold text-md transition-colors duration-300 hover:bg-gray-800 hover:text-blue-500 hover:border-blue-500"
          >
            More articles →
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogGrid;
