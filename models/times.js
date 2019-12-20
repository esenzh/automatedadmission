const mongoose = require('mongoose');

const timeSchema = new mongoose.Schema({
  time: Number,
  user: String,
  admin: String,
});

module.exports = mongoose.model('Time', timeSchema);
