import React from "react";
import BlogGrid from "./BlogGrid";

export default function BlogHero() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#0a0a2a] text-white py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
              E-Cell Blogs
              <br />
              Empowering <br />
              Tomorrow’s Innovators Today
            </h1>
            <p className="text-lg text-gray-400 max-w-xl">
              Welcome to the E-Cell Blog, your source for entrepreneurial
              insights and inspiration. Stay connected with the world of
              innovation and startups.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src="/hero.png"
              alt="E-Cell Blog Illustration"
              className="w-full max-w-md md:max-w-lg"
            />
          </div>
        </div>
      </section>

      {/* Latest Blogs Section */}
      <section className="bg-[#0a0a2a] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Latest Blogs</h2>
          <BlogGrid showAll={false} />
        </div>
      </section>
    </>
  );
}
