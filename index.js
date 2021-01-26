// importing express lib
const express = require('express');
// import path lib
const path = require('path');
// defining the port for running the server
const port = 8000;

// importing mongoose
const db = require('./config/mongoose');

// using express
const app = express();
// middleware used for parsing incoming request data
app.use(express.urlencoded());
// use express router
app.use('/', require('./routes'));

// set the view engine
app.set('view engine', 'ejs');
// set the views folder so that template engine can look for the file
app.set('views', path.join(__dirname, 'views'));

// to set the static folder for views
app.use(express.static('assets'));

// app is listening to the defined port
app.listen(port, function (err) {
  if (err) {
    console.log(`Error running the server: ${err}`);
    return;
  }
  console.log(`Server is up and running in port : ${port}`);
});
