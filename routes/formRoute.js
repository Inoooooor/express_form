const express = require('express');
const { postReq } = require('../controllers/postForm');
const router = express.Router();
router.post('/', postReq);