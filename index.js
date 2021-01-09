const express = require('express');
const path = require('path');

const port = 8000;

const app = express();

app.use(express.urlencoded());
// use express router
app.use('/', require('./routes'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('assets'));

// app.get('/', function (req, res) {
//   res.render('index', { title: 'To-Do app' });
// });

app.listen(port, function (err) {
  if (err) {
    console.log(`Error running the server: ${err}`);
    return;
  }
  console.log(`Server is up and running in port : ${port}`);
});
