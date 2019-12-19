const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
  question: String,
  options: Array,
  answer: String,
});

module.exports = mongoose.model('Test', testSchema);
