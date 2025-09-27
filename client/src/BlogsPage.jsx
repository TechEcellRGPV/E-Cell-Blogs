// import React, { useEffect, useState } from "react";
// import { fetchBlogs } from "../api/blogs";
// import BlogPostCard from "./BlogPostCard";

// function BlogsPage() {
//   const [blogs, setBlogs] = useState([]);
//   const [showAll, setShowAll] = useState(false);

//   useEffect(() => {
//     const getBlogs = async () => {
//       try {
//         const data = await fetchBlogs();
//         setBlogs(data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     getBlogs();
//   }, []);

//   const visibleBlogs = showAll ? blogs : blogs.slice(0, 3);

//   return (
//     <div className="p-6">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {visibleBlogs.map((blog) => (
//           <BlogPostCard key={blog._id} blog={blog} />
//         ))}
//       </div>

//       {!showAll && blogs.length > 3 && (
//         <div className="flex justify-center mt-8">
//           <button onClick={() => setShowAll(true)} className="px-6 py-3 border-2 border-white rounded-full text-white font-semibold text-md transition-colors duration-300 hover:bg-gray-800 hover:text-blue-500 hover:border-blue-500">
//             More articles →
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default BlogsPage;
