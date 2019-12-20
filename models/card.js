const mongoose = require('mongoose');
const { Schema } = mongoose;

const cardSchema = Schema({
  date: String,
  time: [{ type: Schema.Types.ObjectId, ref: 'Time' }],
});

module.exports = mongoose.model('Card', cardSchema);
