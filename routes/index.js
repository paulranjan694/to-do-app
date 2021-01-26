// import express lib
const express = require('express');

// initialising router method of express for using Express Routes
const router = express.Router();
// import maincontroller for actions of the controller
const mainController = require('../controller/mainController');

// GET -> '/' route - main route of the web app
router.get('/', mainController.main);
// POST --> '/create-todo' route - for adding/creating todos
router.post('/create-todo', mainController.createTodo);
// POST --> '/delete-todo'route - for deleting todo/todos
router.post('/delete-todo', mainController.deleteTodo);

// exporting the router
module.exports = router;
