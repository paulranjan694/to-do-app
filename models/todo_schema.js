// import mongoose lib
const mongoose = require('mongoose');

// creating schema
const TodoSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

// assigning model for the schema
const TODO = mongoose.model('TodoApp', TodoSchema);

// exporting
module.exports = TODO;
