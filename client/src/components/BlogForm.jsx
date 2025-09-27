"use client";
import React, { useState, useEffect } from "react";
import { createBlog, updateBlog } from "../api/blogs";

export default function AddBlogForm({ onBlogCreated, editBlog }) {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    tags: "",
    imageFile: null,
    imagePreview: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editBlog) {
      setFormData({
        title: editBlog.title || "",
        content: editBlog.content || "",
        tags: editBlog.tags ? editBlog.tags.join(", ") : "",
        imageFile: null,
        imagePreview: editBlog.image || "",
      });
      setErrors({});
    }
  }, [editBlog]);

  const validate = () => {
    const errs = {};
    if (!formData.title.trim()) errs.title = "Title is required";
    if (!formData.content.trim()) errs.content = "Content is required";
    if (!formData.tags.trim()) errs.tags = "At least one tag is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      imageFile: file,
      imagePreview: file ? URL.createObjectURL(file) : prev.imagePreview,
    }));
  };

  const removeTag = (tagToRemove) => {
    const tagsArray = formData.tags
      .split(",")
      .map((t) => t.trim())
      .filter((t) => t && t !== tagToRemove);
    setFormData((prev) => ({ ...prev, tags: tagsArray.join(", ") }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("content", formData.content);

      formData.tags
        .split(",")
        .forEach((tag) => data.append("tags", tag.trim()));
      if (formData.imageFile) data.append("image", formData.imageFile);

      if (editBlog) {
        await updateBlog(editBlog._id || editBlog.id, data);
      } else {
        await createBlog(data);
      }

      setFormData({
        title: "",
        content: "",
        tags: "",
        imageFile: null,
        imagePreview: "",
      });
      if (onBlogCreated) onBlogCreated();
    } catch (err) {
      console.error(err);
      setErrors({ submit: "Failed to submit blog post" });
    }
  };

  const tagsArray = formData.tags
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 mb-6 p-6 border rounded-lg shadow-lg bg-gray-50"
    >
      <h3 className="text-xl font-semibold text-gray-800">
        {editBlog ? "Edit Blog" : "Create New Blog"}
      </h3>

      {errors.submit && (
        <div className="text-red-600 font-medium">{errors.submit}</div>
      )}

      <div>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Blog Title"
          className={`w-full p-3 border rounded ${
            errors.title ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
      </div>

      <div>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          rows="5"
          placeholder="Blog Content"
          className={`w-full p-3 border rounded ${
            errors.content ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.content && (
          <p className="text-red-500 text-sm">{errors.content}</p>
        )}
      </div>

      <div>
        <input
          type="text"
          name="tags"
          value={formData.tags}
          onChange={handleChange}
          placeholder="Tags (comma separated)"
          className={`w-full p-3 border rounded ${
            errors.tags ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.tags && <p className="text-red-500 text-sm">{errors.tags}</p>}

        {/* Tags preview */}
        <div className="flex flex-wrap gap-2 mt-2">
          {tagsArray.map((tag, i) => (
            <div
              key={i}
              className="bg-blue-200 text-blue-800 px-2 py-1 rounded flex items-center gap-1"
            >
              <span>{tag}</span>
              <button
                type="button"
                onClick={() => removeTag(tag)}
                className="text-red-600 font-bold"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <label
          htmlFor="fileUpload"
          className="block w-full p-3 border border-dashed rounded text-center cursor-pointer bg-gray-100 hover:bg-gray-200"
        >
          {formData.imageFile ? "Change Image" : "Upload Blog Image"}
        </label>
        <input
          id="fileUpload"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
        {formData.imagePreview && (
          <div className="mt-3 flex justify-center">
            <img
              src={formData.imagePreview}
              alt="Preview"
              className="max-h-64 rounded-lg border shadow object-contain"
            />
          </div>
        )}
      </div>

      <button
        type="submit"
        className={`w-full px-4 py-2 text-white rounded-lg ${
          editBlog
            ? "bg-yellow-600 hover:bg-yellow-700"
            : "bg-green-600 hover:bg-green-700"
        } transition`}
      >
        {editBlog ? "Update Blog" : "Publish Blog"}
      </button>
    </form>
  );
}
