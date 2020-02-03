const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new mongoose.Schema({
    date: String,
    time: [{type: Schema.Types.ObjectId, ref: 'Time'}],
    admin: String
});

module.exports = mongoose.model('Card', cardSchema);
