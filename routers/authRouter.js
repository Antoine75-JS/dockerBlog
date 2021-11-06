const express = require('express');
const router = express.Router();

// Controllers
const { signup } = require('../controllers/authController');

// Routes
router.post('/signup', signup);

module.exports = router;