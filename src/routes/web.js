const express = require('express');
const router = express.Router();
const {getHomepage, getEjs} = require('../controllers/homeController');

router.get('/', getHomepage);

router.get('/ejs', getEjs);

module.exports = router;
