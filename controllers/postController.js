// Models
const Post = require('../models/postModel');

// Get all posts
exports.getAllPosts = async (req, res, next) => {
  try {
    const allPosts = await Post.find();
    if (allPosts) {
      console.log(allPosts);
      res.status(200).json({
        status: 'success',
        results: allPosts.length,
        data: {
          allPosts
        }
      })
    } else {
      res.status(404).json({
        status: 'fail',
        message: 'No post found',
      })
    }
  } catch (err) {
    console.trace(err);
    res.status(500).json({ message: err.message })
  }
  next();
};

// Get one post
exports.getPostById = async (req, res, next) => {
  try {
    const singlePost = await Post.findById(req.params.id);

    if (singlePost) {
      console.log(singlePost);
      res.status(200).json({
        status: 'success',
        data: {
          singlePost
        }
      })
    } else {
      res.status(404).json({
        status: 'fail',
        message: 'Post not found',
      })
    }
  } catch (err) {
    console.trace(err);
    res.status(500).json({ message: err.message })
  }
  next();
};

// Create post
exports.createPost = async (req, res, next) => {
  try {
    const newPost = await Post.create(req.body);
    if (newPost) {
      res.status(201).json({
        status: 'success',
        data: {
          newPost
        }
      })
    } else {
      res.status(400).json({
        status: 'fail',
        message: 'Post not created',
      })
    }
  } catch (err) {
    console.trace(err);
    res.status(500).json({ message: err.message })
  }
  next();
};

// Update post
exports.updatePost = async (req, res, next) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (updatedPost) {
      console.log(updatedPost);
      res.status(200).json({
        status: 'success',
        data: {
          updatedPost
        }
      })
    } else {
      res.status(404).json({
        status: 'fail',
        message: 'Post not found',
      })
    }
  } catch (err) {
    console.trace(err);
    res.status(500).json({ message: err.message })
  }
  next();
};

// Delete post
exports.deletePost = async (req, res, next) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);

    if (deletedPost) {
      console.log(deletedPost);
      res.status(200).json({
        status: 'success',
        data: {
          deletedPost
        }
      })
    } else {
      res.status(404).json({
        status: 'fail',
        message: 'Post not found',
      })
    }
  } catch (err) {
    console.trace(err);
    res.status(500).json({ message: err.message })
  }
  next();
};
