const express = require('express');

const router = express.Router();
const Test = require('../models/test');
const Card = require('../models/card');

/* Get to test page. */
router.get('/test', async (req, res) => {
  const { user } = req.session;
  const test = await Test.find({});
  res.render('test', { test, user });
});

router.get('/start-test', async (req, res) => {
  if (!req.session.user) {
    const message = 'Please Login before starting test or Register';
    res.redirect(`/login?message=${message}`);
  } else {
    res.redirect('/user/test');
  }
});

router.get('/calendar', async (req, res) => {
  const { user } = req.session;
  const cards = await Card.find();
  console.log(cards);
  res.render('calendar', { cards, user });
});

router.post('/calendar', )

// async function(req, res, next) {
//   const newEntry = new Entry({
//     title: req.body.title,
//     body: req.body.body,
//     author: req.body.author
//   });
//   newEntry.save();
//   res.redirect(`/entries/${newEntry.id}`);

module.exports = router;
