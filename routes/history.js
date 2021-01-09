const express = require('express');
const router = express.Router();

const historyController = require('../controller/historyController');

router.get('/', historyController.history);

module.exports = router;
