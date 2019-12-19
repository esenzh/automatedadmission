const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/automatedadmission", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const Test = require('../models/test');

const test1 = new Test({
    question: 'Which one is not a variable type in JS?',
    answer: 'NaN',
    option1: 'undefined',
    option2: 'null',
    option3: 'NaN',
    option4: 'function'
});
const test2 = new Test({
    question: 'What is the loop?',
    answer: 'Iteration',
    option1: 'undefined',
    option2: 'null',
    option3: 'NaN',
    option4: 'Iteration'
});
const test3 = new Test({
    question: 'How is life?',
    answer: 'All good',
    option1: 'undefined',
    option2: 'All good',
    option3: 'NaN',
    option4: 'function'
});
const test4 = new Test({
    question: 'You good?',
    answer: 'Yeah',
    option1: 'undefined',
    option2: 'null',
    option3: 'NaN',
    option4: 'Yeah'
});
const test5 = new Test({
    question: 'Which one is not a variable type in JS?',
    answer: 'NaN',
    option1: 'undefined',
    option2: 'null',
    option3: 'NaN',
    option4: 'function'
});

test1.save();
test2.save();
test3.save();
test4.save();
test5.save();

