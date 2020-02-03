const express = require('express');

const router = express.Router();
const Test = require('../models/test');
const User = require('../models/user');
const Card = require('../models/card');
const Time = require('../models/time');

/* Get to test page. */
router
  .get('/start-test', async (req, res) => {
    if (!req.session.user) {
      const message = 'Please Login before starting test or Register';
      res.redirect(`/login?message=${message}`);
    } else {
      res.redirect('/user/test');
    }
  })
  .get('/test', async (req, res) => {
    let test = await Test.find({});
    let counter = 0;
    test = test.map((el) => {
      const a = { questionNumber: `question${counter}` };
      const obj = {};
      Object.assign(obj, el._doc, a);
      counter += 1;
      return obj;
    });
    res.render('test', { test });
  })
  .post('/test/submit', async (req, res) => {
    const form = JSON.parse(JSON.stringify(req.body));
    const { question0, question1, question2 } = form;
    const test = await Test.find({});
    let counter = 0;
    test.forEach((el) => {
      if (el.answer === question0) counter += 1;
      else if (el.answer === question1) counter += 1;
      else if (el.answer === question2) counter += 1;
    });
    if (!req.session.user) {
      res.redirect('/login');
    } else {
      await User.findOneAndUpdate(
        { _id: req.session.user._id },
        { $set: { test_result: counter } },
      );
      res.redirect('/user/calendar');
    }
  })
  .get('/calendar', async (req, res) => {
    const card = await Card.find({}).populate('time');
    res.render('calendar', { card });
  })
  .post('/exam-register', async (req, res) => {
    const { date, time } = req.body;
    if (req.session.user) {
      const user = req.session.user.first_name;
      const card = await Card.findOne({ date });
      let timeId;
      for (let i = 0; i < card.time.length; i += 1) {
        if (card.time[i].time === time) {
          timeId = card.time[i]._id;
        }
      }
      await Time.findOneAndUpdate(
        { _id: timeId },
        { user },
        { new: true },
      );
    }
    res.redirect('/');
  });

module.exports = router;
