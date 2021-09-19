const {findAll, findOne} = require('../controller/movieController');
const express = require('express');
const router = express.Router();

router.get('/', findAll);
router.get('/:id', findOne);

module.exports = router;