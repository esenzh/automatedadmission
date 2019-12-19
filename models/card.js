const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  day: Number,
  month: String,
  time: [{ type: String }],
});

module.exports = mongoose.model('Card', cardSchema);
