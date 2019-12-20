const mongoose = require('mongoose');
const Schema = mongoose.Schema;

<<<<<<< HEAD
const { Schema } = mongoose;

const cardSchema = Schema({
  date: String,
  day: Number,
  month: String,
  time: [{ type: Schema.Types.ObjectId, ref: 'Time' }],
=======
const cardSchema = Schema({
    date: String,
    time: [{type: Schema.Types.ObjectId, ref: 'Time'}]
>>>>>>> origin/authorization
});

module.exports = mongoose.model('Card', cardSchema);
