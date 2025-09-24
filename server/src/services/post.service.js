const Post = require("../models/post.model.js");

exports.createPost = async (userId, data) => {
  try {
    const post = new Post({ ...data, author: userId });
    return post.save();
  } catch (err) {
    console.log(err);
  }
};

exports.getPosts = async (filter = {}) => {
  try {
    return Post.find(filter).populate("author", "name email");
  } catch (err) {
    console.log(err);
  }
};

exports.getPostById = async (postId) => {
  try {
    return Post.findById(postId).populate("author", "name email");
  } catch (err) {
    console.log(err);
  }
};

exports.updatePost = async (postId, data) => {
  try {
    return Post.findByIdAndUpdate(postId, data, { new: true });
  } catch (err) {
    console.log(err);
  }
};

exports.deletePost = async (postId) => {
  try {
    return Post.findByIdAndDelete(postId);
  } catch (err) {
    console.log(err);
  }
};
