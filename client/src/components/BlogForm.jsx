"use client";
import React, { useState, useEffect } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Toolbar from "./Toolbar";
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

  // ✅ Editor setup
  const editor = useEditor({
    extensions: [
      StarterKit, // includes bold, italic, strike, headings, lists, blockquote, codeBlock
      Underline, // adds underline support
      Link.configure({ openOnClick: false }), // link support
    ],
    content: formData.content || "",
    onUpdate: ({ editor }) =>
      setFormData((prev) => ({ ...prev, content: editor.getHTML() })),
  });

  useEffect(() => {
    if (editBlog && editor) editor.commands.setContent(editBlog.content || "");
  }, [editBlog, editor]);

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

  const validate = () => {
    const errs = {};
    if (!formData.title.trim()) errs.title = "Title is required";
    if (!formData.content.trim()) errs.content = "Content is required";
    if (!formData.tags.trim()) errs.tags = "At least one tag is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
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
      className="space-y-6 mb-6 p-6 border border-slate-700 rounded-xl shadow-lg bg-slate-900 text-white"
    >
      <h3 className="text-2xl font-semibold">
        {editBlog ? "Edit Blog" : "Create New Blog"}
      </h3>
      {errors.submit && (
        <div className="text-red-400 font-medium">{errors.submit}</div>
      )}

      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Blog Title"
        className={`w-full p-3 rounded-lg bg-slate-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 ${
          errors.title ? "border border-red-500" : "border border-slate-600"
        }`}
      />
      {errors.title && <p className="text-red-400 text-sm">{errors.title}</p>}

      <div className="border border-slate-700 rounded-lg p-2 bg-slate-800">
        <Toolbar editor={editor} />
        <EditorContent
          editor={editor}
          className="prose prose-sm prose-invert max-w-none min-h-[200px] leading-normal px-2 py-1 text-white"
        />

        {errors.content && (
          <p className="text-red-400 text-sm mt-1">{errors.content}</p>
        )}
      </div>

      <input
        type="text"
        name="tags"
        value={formData.tags}
        onChange={handleChange}
        placeholder="Tags (comma separated)"
        className={`w-full p-3 rounded-lg bg-slate-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 ${
          errors.tags ? "border border-red-500" : "border border-slate-600"
        }`}
      />
      {errors.tags && <p className="text-red-400 text-sm">{errors.tags}</p>}

      <div className="flex flex-wrap gap-2 mt-2">
        {tagsArray.map((tag, i) => (
          <div
            key={i}
            className="bg-blue-900 text-blue-300 px-2 py-1 rounded-md flex items-center gap-1 text-sm"
          >
            <span>{tag}</span>
            <button
              type="button"
              onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  tags: prev.tags.replace(tag, "").replace(",,", ","),
                }))
              }
              className="text-red-400 font-bold"
            >
              ×
            </button>
          </div>
        ))}
      </div>

      <label
        htmlFor="fileUpload"
        className="block w-full p-3 border border-dashed border-slate-600 rounded-lg text-center cursor-pointer bg-slate-800 hover:bg-slate-700 transition"
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
            className="max-h-64 rounded-lg border border-slate-600 shadow object-contain"
          />
        </div>
      )}

      <button
        type="submit"
        className="w-full px-4 py-2 text-white font-medium rounded-lg shadow bg-green-600 hover:bg-green-700 transition"
      >
        {editBlog ? "Update Blog" : "Publish Blog"}
      </button>
    </form>
  );
}
