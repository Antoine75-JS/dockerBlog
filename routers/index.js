
const express = require('express');
const router = express.Router();

// Controllers
const { dockerServer } = require('../controllers/pingController')

// Routes
router.get('/', dockerServer)

module.exports = router;

