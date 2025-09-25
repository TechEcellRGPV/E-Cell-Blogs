import React, { useState } from 'react';

export default function AddBlogForm() {
  const [formData, setFormData] = useState({
    title: '',
    imageURL: '',
    summary: '',
    author: '',
    content: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Blog post submitted successfully!');
        setFormData({
          title: '',
          imageURL: '',
          summary: '',
          author: '',
          content: ''
        });
      } else {
        alert('Failed to submit blog post.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a2a] text-gray-100 p-6 md:p-12 flex justify-center items-center">
      <div className="w-full max-w-4xl mx-auto bg-[#1a1a3a] p-8 md:p-12 rounded-xl shadow-2xl border border-gray-700">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Create a New Blog Post
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-1">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                placeholder="Enter blog title"
                required
              />
            </div>
            <div>
              <label htmlFor="author" className="block text-sm font-medium text-gray-300 mb-1">
                Author Name
              </label>
              <input
                type="text"
                id="author"
                name="author"
                value={formData.author}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                placeholder="Your name"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="imageURL" className="block text-sm font-medium text-gray-300 mb-1">
              Image URL
            </label>
            <input
              type="url"
              id="imageURL"
              name="imageURL"
              value={formData.imageURL}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              placeholder="e.g., https://unsplash.com/your-image.jpg"
              required
            />
          </div>

          <div>
            <label htmlFor="summary" className="block text-sm font-medium text-gray-300 mb-1">
              Summary
            </label>
            <textarea
              id="summary"
              name="summary"
              value={formData.summary}
              onChange={handleChange}
              rows="3"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              placeholder="A brief summary of the blog post"
              required
            ></textarea>
          </div>

          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-300 mb-1">
              Blog Content
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              rows="12"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              placeholder="Write your blog content here..."
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full mt-8 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg font-bold transition duration-300 shadow-lg transform hover:scale-105"
          >
            Publish Blog
          </button>
        </form>
      </div>
    </div>
  );
}