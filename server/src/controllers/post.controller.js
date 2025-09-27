const postService = require("../services/post.service.js");
const { uploadImageBuffer } = require("../services/upload.service.js");

exports.createPost = async (req, res) => {
  try {
    const { title, content, tags } = req.body || {};

    let imageUrl = "";
    if (req.file) {
      imageUrl = await uploadImageBuffer(req.file.buffer, "post_images");
    }

    const post = await postService.createPost(req.user.id, {
      title,
      content,
      tags: tags
        ? Array.isArray(tags)
          ? tags
          : tags.split(",").map((t) => t.trim())
        : [],
      image: imageUrl,
    });

    res.status(201).json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await postService.getPosts();
    res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getPostById = async (req, res) => {
  try {
    const post = await postService.getPostById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.status(200).json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const { title, content, tags } = req.body || {};

    let tagsArray = [];
    if (tags) {
      tagsArray = Array.isArray(tags)
        ? tags
        : tags.split(",").map((t) => t.trim());
    }

    let imageUrl;
    if (req.file) {
      imageUrl = await uploadImageBuffer(req.file.buffer, "post_images");
    }

    const updateData = {
      ...(title && { title }),
      ...(content && { content }),
      tags: tagsArray,
      ...(imageUrl && { image: imageUrl }),
    };

    const updated = await postService.updatePost(req.params.id, updateData);

    if (!updated) return res.status(404).json({ message: "Post not found" });
    res.status(200).json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const deleted = await postService.deletePost(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Post not found" });
    res.status(200).json({ message: "Post deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.updatePostImage = async (req, res) => {
  try {
    if (!req.file)
      return res.status(400).json({ message: "No image uploaded" });

    const imageUrl = await uploadImageBuffer(req.file.buffer, "post_images");

    const post = await postService.updatePost(req.params.id, {
      image: imageUrl,
    });

    if (!post) return res.status(404).json({ message: "Post not found" });

    res.status(200).json({ message: "Post image updated", post });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
