const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  test_result: Number,
  exam_date: {
    day: Number,
    month: String,
    time: Number,
  },
});

module.exports = mongoose.model('User', userSchema);
