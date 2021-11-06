
const express = require('express');
const router = express.Router();

// Routers
const postRouter = require('./postRouter');
const authRouter = require('./authRouter');
const userRouter = require('./userRouter');

// Routes
router.use('/posts', postRouter);
router.use('/auth', authRouter);
router.use('/user', userRouter);

module.exports = router;

