import React from 'react';
import { Check } from "lucide-react";
import { Link } from 'react-router-dom';
import { blogsData } from './data/blogs';

const BlogPostCard = ({ post }) => {
  return (
    <Link 
      to={`/blog/${post.id}`}  // URL param
      state={{ post }}         // pass the full post object
      className="relative group rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
    >
      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          src={post.imageURL}
          alt={post.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
      </div>
      <div className="p-6 bg-gray-900 rounded-b-xl">
        <div className="font-bold text-2xl mb-2 leading-tight">{post.title}</div>
        <p className="text-gray-400 text-sm mb-4">{post.category}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img className="w-10 h-10 rounded-full mr-4 p-[2px]" src='./logo.png' alt='E-Cell RGPV' />
            <div className="text-sm mt-4">
              <p className="font-semibold flex items-center">E-Cell RGPV</p>
              <p className="text-gray-400 text-xs mt-1 flex items-center gap-1">
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
    </Link>
  );
};

export default BlogPostCard;


