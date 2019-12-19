const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  day: Number,
  month: String,
  time1: Number,
  time2: Number,
  time3: Number,
  time4: Number,
  time5: Number,
  time6: Number,
  time7: Number,
  time8: Number,
  time9: Number,
});

module.exports = mongoose.model('Card', cardSchema);
