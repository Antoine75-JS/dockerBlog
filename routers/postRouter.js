
const express = require('express');
const router = express.Router();

// Check auth middleware
const checkAuth = require('../middlewares/authMiddleware');

// Controllers
const {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} = require('../controllers/postController');

router.get('/', getAllPosts);

router.get('/:id', getPostById);

router.post('/', checkAuth, createPost);

router.patch('/:id', checkAuth, updatePost);

router.delete('/:id', checkAuth, deletePost);

module.exports = router;

