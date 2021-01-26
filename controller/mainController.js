// importing the schema from model
const Todo = require('../models/todo_schema');

// action part of the controller
// exporting action using export.exports.actionName

// "main" action for '/' route
module.exports.main = function (req, res) {
  // fetching record from db
  Todo.find({}, function (err, todos) {
    if (err) {
      console.log('error in fetching the todos from db');
      return;
    }

    // sending response from server to frontend/views
    res.render('index', {
      title: 'TODO App',
      todo_list: todos,
    });
  });
};

// 'createTodo' action for POST--> '/create-todo' route
module.exports.createTodo = function (req, res) {
  // Add todo to db
  Todo.create(req.body, function (err, newTodo) {
    if (err) {
      console.log('error in creating todo');
      return;
    }
    // redirect to homepage
    return res.redirect('back');
  });
};

// 'deleteTodo' action for POST--> '/delete-todo' route
module.exports.deleteTodo = function (req, res) {
  // storing the array of index to be deleted
  let data = req.body.checkedIndex;

  // iterating over the array
  for (let val of data) {
    // deleting the todo from db
    Todo.findByIdAndDelete(val, function (err) {
      if (err) {
        console.log('error in deleting from db');
        return;
      }
    });
  }
  // redirect back to homepage
  return res.redirect('/');
};
