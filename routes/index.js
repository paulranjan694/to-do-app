const express = require('express');

const router = express.Router();
const mainController = require('../controller/mainController');

console.log('router loaded');

router.get('/', mainController.main);

router.post('/create-todo', mainController.createTodo);

router.use('/history', require('./history'));

module.exports = router;
