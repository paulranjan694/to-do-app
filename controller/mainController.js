module.exports.main = function (req, res) {
  res.render('index', { title: 'TODO App' });
};

module.exports.createTodo = function (req, res) {
  console.log(req.body);
  return;
};
