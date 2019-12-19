const mongoose = require('mongoose');
const Card = require('../models/card');

mongoose.connect(
  'mongodb+srv://tenderUser:b.-6EEHk!7obdBxTshEP@cluster0-kuoil.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);

const testCard1 = new Card({
  day: 13,
  month: 'March',
  time: ['10:00', '11:00', '12:00'],
});

const testCard2 = new Card({
  day: 15,
  month: 'April',
  time: ['10:00', '11:00', '12:00', '14:00'],
});

testCard1.save();
testCard2.save();
