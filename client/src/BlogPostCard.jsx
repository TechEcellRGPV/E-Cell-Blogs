import React from 'react';
import { Check } from "lucide-react";

// This is the component for a single blog post card
const BlogPostCard = ({ post }) => {
  return (
    <a href="#" className="relative group rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          src={post.imageURL}
          alt={post.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
      </div>
      <div className="p-6 bg-gray-900 rounded-b-xl">
        <div className="font-bold text-2xl mb-2 leading-tight">
          {post.title}
        </div>
        <p className="text-gray-400 text-sm mb-4">
          {post.category}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-4 p-[2px]"
              src='./logo.png'
              alt='E-Cell RGPV'
            />
            
            <div className="text-sm">
            <p className="font-semibold flex items-center">
                E-Cell RGPV
            </p>
            <p className="text-gray-400 text-xs flex items-center gap-1">
                <span className="bg-green-900 text-green-500 rounded-full p-[4px] flex items-center justify-center">
                     <Check className="w-3 h-3" />
                </span>
                Verified writer
            </p>
            </div>
          </div>
          <p className="text-gray-400 text-sm">{post.date}</p>
        </div>
      </div>
    </a>
  );
};

// This is the main component that displays the grid of blog posts
const BlogGrid = () => {
  // Sample data for multiple blog posts
  const blogPosts = [
    {
      id: 1,
      title: 'The High Cost of Victory: Olympic Economics',
      category: 'Olympics',
      imageURL: 'data:image/jpeg;base64,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',
      authorName: '',
      authorImage: '/logo.png',
      date: '5 August'
    }
  ];

  // Slice the array to get only the first 3 blog posts
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-950 text-white p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {recentPosts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
      {/* "More articles" button, centered below the grid */}
      <div className="flex justify-center mt-12">
        <a href="/all-articles">
          <button className="px-6 py-3 border-2 border-white rounded-full text-white font-semibold text-md transition-colors duration-300 hover:bg-gray-800 hover:text-blue-500 hover:border-blue-500">
            More articles →
          </button>
        </a>
      </div>
    </div>
  );
};

export default BlogGrid;