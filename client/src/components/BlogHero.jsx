import React from "react";
import BlogGrid from "./BlogGrid";

export default function BlogHero() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#0a0a2a] text-white py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left"> {/* Center text on small screens, left on medium and up */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              <span className="block">E-Cell Blogs</span>
              <span className="block text-blue-400">Empowering Tomorrow’s</span>
              <span className="block">Innovators Today</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-xl mx-auto md:mx-0"> {/* Center paragraph on small screens */}
              Welcome to the E-Cell Blog, your source for entrepreneurial
              insights and inspiration. Stay connected with the world of
              innovation and startups.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src="/hero.png"
              alt="E-Cell Blog Illustration"
              className="w-full max-w-sm md:max-w-lg" // Adjusted max-w for image
            />
          </div>
        </div>
      </section>

      {/* Latest Blogs Section */}
      <section className="bg-[#0a0a2a] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <BlogGrid showAll={false} />
        </div>
      </section>
    </>
  );
}