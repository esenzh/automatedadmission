const express = require('express');

const router = express.Router();
const Test = require('../models/test');
const Card = require('../models/card');

/* Get to test page. */
router.get('/test', async (req, res, next) => {
  const test = await Test.find({});
  res.render('test', { test });
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
  const cards = await Card.find({});
  
  console.log(cards);
  res.render('calendar');
});

module.exports = router;
