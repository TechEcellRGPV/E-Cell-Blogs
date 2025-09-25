import React from "react";
import BlogPostCard from "./BlogPostCard";

export default function BlogHero() {
  return (
    <section className="bg-[#0a0a2a] text-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text */}
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            E-Cell Blogs : <br />
            Empowering <br />
            Tomorrow’s Innovators <br />
            Today
          </h1>
          <p className="text-lg text-gray-400 max-w-xl">
            Welcome to the E-Cell Blog, your source for entrepreneurial
            insights and inspiration. Stay connected with the world of
            innovation and startups.
          </p>
        </div>

        {/* Right Side - Illustration */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/hero.png"
            alt="E-Cell Blog Illustration"
            className="w-full max-w-md md:max-w-lg"
          />
        </div>
      </div>

      <BlogPostCard />
    </section>
  );
}
