const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/automatedadmission", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const Test = require('../models/test');

const test1 = new Test({question: 'Which one is not a variable type in JS?', options: ['undefined', 'null', 'NaN', 'function'], answer: 'NaN'});
const test2 = new Test({question: 'What is the loo?', options: ['undefined', 'null', 'NaN', 'function'], answer: 'Iteration'});
const test3 = new Test({question: 'How is life?', options: ['undefined', 'null', 'NaN', 'function'], answer: 'All good'});
const test4 = new Test({question: 'You good?', options: ['undefined', 'null', 'NaN', 'function'], answer: 'NaN'});
const test5 = new Test({question: 'Which one is not a variable type in JS?', options: ['undefined', 'null', 'NaN', 'function'], answer: 'NaN'});

test1.save();
test2.save();
test3.save();
test4.save();
test5.save();

