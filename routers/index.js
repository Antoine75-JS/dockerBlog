
const express = require('express');
const router = express.Router();

// Routers
const postRouter = require('./postRouter');

// Routes
router.use('/posts', postRouter);

module.exports = router;

