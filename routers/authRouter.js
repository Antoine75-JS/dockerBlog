const express = require('express');
const router = express.Router();

// Controllers
const { signup, login } = require('../controllers/authController');

// Routes
router.post('/signup', signup);
router.post('/login', login);

module.exports = router;