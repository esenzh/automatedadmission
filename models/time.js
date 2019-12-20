const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const timeSchema = Schema({
    time: String,
    admin: String,
    user: String
});

module.exports = mongoose.model('Time', timeSchema);