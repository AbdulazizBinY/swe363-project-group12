const express = require('express');
const router = express.Router();
const resoursesMainCont = require('../controllers/resoursesMainCont');

router.get('/', resoursesMainCont.Main);

module.exports = router;
