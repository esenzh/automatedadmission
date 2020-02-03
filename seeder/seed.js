const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

mongoose.connect(
  'mongodb+srv://tenderUser:b.-6EEHk!7obdBxTshEP@cluster0-kuoil.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);
const Test = require('../models/test');
const Admin = require('../models/admin');

const test1 = new Test({
  question: 'Which one is not a variable type in JS?',
  answer: 'NaN',
  option1: 'undefined',
  option2: 'null',
  option3: 'NaN',
  option4: 'function',
});
const test2 = new Test({
  question: 'What is the loop?',
  answer: 'Iteration',
  option1: 'I dont know',
  option2: 'pass',
  option3: 'no pass',
  option4: 'Iteration',
});
const test3 = new Test({
  question: 'How is life?',
  answer: 'All good',
  option1: 'No good',
  option2: 'All good',
  option3: 'Please go away',
  option4: 'Come again',
});

// test1.save();
// test2.save();
// test3.save();

const saltRounds = 10;
async function admin() {
  const password = 'admin2';
  const admin = new Admin({
    first_name: 'Admin1',
    last_name: 'Adminov1',
    email: 'admin1@mailru',
    username: 'admin2',
    password: await bcrypt.hash(password, saltRounds),
  });
  // admin.save();
}
// admin();
