const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    question: String,
    answer: String,
    option1: String,
    option2: String,
    option3: String,
    option4: String,

});

module.exports = mongoose.model('Test', testSchema);
