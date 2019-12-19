const mongoose = require('mongoose');
mongoose.connect(
  'mongodb+srv://tenderUser:b.-6EEHk!7obdBxTshEP@cluster0-kuoil.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);
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
    option1: 'I dont know',
    option2: 'pass',
    option3: 'no pass',
    option4: 'Iteration'
});
const test3 = new Test({
    question: 'How is life?',
    answer: 'All good',
    option1: 'No good',
    option2: 'All good',
    option3: 'Please go away',
    option4: 'Come again'
});

test1.save();
test2.save();
test3.save();
