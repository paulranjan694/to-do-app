// importing mongoose lib
const mongoose = require('mongoose');

// connect method for connecting to the db
mongoose.connect('mongodb://localhost/todo_app_db');

// variable for checking if connected to db or not
const db = mongoose.connection;

// error while connecting to db
db.on('error', console.error.bind(console, 'Error connecting the database'));

// successful connection to db
db.once('open', function () {
  console.log('Successfully connected to database');
});
