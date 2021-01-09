const Todo = require('../models/todo_schema');

module.exports.main = function (req, res) {
  Todo.find({}, function (err, todos) {
    if (err) {
      console.log('error in fetching the todos from db');
      return;
    }

    // console.log('frtched*******', todos);
    res.render('index', {
      title: 'TODO App',
      todo_list: todos,
    });
  });
};

module.exports.createTodo = function (req, res) {
  Todo.create(req.body, function (err, newTodo) {
    if (err) {
      console.log('error in creating todo');
      return;
    }

    console.log('********', newTodo);
    return res.redirect('back');
  });
};
