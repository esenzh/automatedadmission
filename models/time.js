const mongoose = require('mongoose');

const timeSchema = new mongoose.Schema({
    time: String,
    user: String
});

module.exports = mongoose.model('Time', timeSchema);