const express = require('express');
const Admin = require('../models/admin');
const User = require('../models/user');
const Time = require('../models/time');
const Card = require('../models/card');

const router = express.Router();

// /admin
router.get('/home', (req, res) => {
  const { message } = req.query;
  res.render('home', { message });
});

router.post('/submitTime', async (req, res) => {
  const dateTime = JSON.parse(JSON.stringify(req.body));
  const time = await Time.findOne({ time: dateTime.time });
  if (req.session.admin || !time) {
    const adminName = req.session.admin.username;
    const time = new Time({ time: dateTime.time, admin: adminName });
    await time.save();
    const date = new Card({ date: dateTime.date, time: time });
    await date.save();
    let message = 'The slot has been created';
    res.redirect(`/admin/home?message=${message}`);
  } else {
    let message = 'This slot time is reserved, please choose another';
    res.redirect(`/admin/home?message=${message}`);
  }
});

// router.get('/list-slots', async(req, res) => {
//     const {username} = req.session.admin
//     const time = await Time.find({admin: username});
// });

module.exports = router;
