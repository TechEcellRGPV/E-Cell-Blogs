"use client";
import React, { useState, useEffect } from "react";

export default function Toolbar({ editor }) {
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");
  const [, setUpdate] = useState(0); // Dummy state to force re-render

  // Re-render toolbar whenever editor updates selection/marks
  useEffect(() => {
    const onUpdate = () => setUpdate((u) => u + 1);
    editor.on("selectionUpdate", onUpdate);
    editor.on("transaction", onUpdate); // optional for more reactive
    return () => {
      editor.off("selectionUpdate", onUpdate);
      editor.off("transaction", onUpdate);
    };
  }, [editor]);

  if (!editor) return null;

  const buttonClass = (isActive) =>
    `px-2 py-1 rounded border text-sm ${
      isActive
        ? "bg-blue-600 text-white"
        : "bg-slate-800 text-gray-300 border-slate-600 hover:bg-slate-700"
    }`;

  const applyLink = () => {
    if (linkUrl) {
      editor.chain().focus().setLink({ href: linkUrl }).run();
      setLinkUrl("");
      setShowLinkInput(false);
    }
  };

  return (
    <div className="flex flex-col gap-2 border-b border-slate-700 pb-2 mb-2">
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={buttonClass(editor.isActive("bold"))}
        >
          B
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={buttonClass(editor.isActive("italic"))}
        >
          I
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={buttonClass(editor.isActive("strike"))}
        >
          S
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={buttonClass(editor.isActive("underline"))}
        >
          U
        </button>

        {[1, 2, 3].map((level) => (
          <button
            key={level}
            type="button"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level }).run()
            }
            className={buttonClass(editor.isActive("heading", { level }))}
          >
            H{level}
          </button>
        ))}

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={buttonClass(editor.isActive("bulletList"))}
        >
          • List
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={buttonClass(editor.isActive("orderedList"))}
        >
          1. List
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={buttonClass(editor.isActive("blockquote"))}
        >
          ❝
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={buttonClass(editor.isActive("codeBlock"))}
        >
          {"</>"}
        </button>

        <button
          type="button"
          onClick={() => setShowLinkInput((prev) => !prev)}
          className={buttonClass(editor.isActive("link"))}
        >
          🔗
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().unsetLink().run()}
          className="px-2 py-1 rounded border text-sm bg-red-600 text-white hover:bg-red-700"
        >
          ✖
        </button>
      </div>

      {showLinkInput && (
        <div className="flex gap-2 items-center mt-2">
          <input
            type="url"
            placeholder="Enter URL"
            value={linkUrl}
            onChange={(e) => setLinkUrl(e.target.value)}
            className="border border-slate-600 rounded px-2 py-1 text-sm flex-1 bg-slate-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="button"
            onClick={applyLink}
            className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
          >
            Apply
          </button>
          <button
            type="button"
            onClick={() => {
              setShowLinkInput(false);
              setLinkUrl("");
            }}
            className="bg-slate-700 text-gray-300 px-2 py-1 rounded text-sm hover:bg-slate-600"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}
