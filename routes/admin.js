const express = require('express');
const User = require('../models/user');
const Time = require('../models/time');
const Card = require('../models/card');

const router = express.Router();
// /admin
router.get('/home', (req, res) => {
  const { message, status } = req.query;
  res.render('home', { message, status });
});

router.post('/submitTime', async (req, res) => {
  const dateTime = JSON.parse(JSON.stringify(req.body));
  const time = await Time.findOne({ time: dateTime.time });
  if (req.session.admin || !time) {
    const adminName = req.session.admin.username;
    const time = new Time({ time: dateTime.time });
    await time.save();
    const timeId = time._id;
    const dbdate = await Card.find({ date: dateTime.date });
    if (dbdate.length !== 0) {
      await Card.update({ date: dateTime }, { $set: { admin: adminName } });
      await Card.update({ date: dateTime }, { $push: { time: timeId } });
    } else {
      const date = new Card({
        date: dateTime.date,
        time: [timeId],
        admin: adminName,
      });
      await date.save();
    }
    const message = 'The slot has been created';
    const status = true;
    res.redirect(`/admin/home?message=${message}&status=${status}`);
  } else {
    const status = false;
    const message = 'This slot time is reserved, please choose another';
    res.redirect(`/admin/home?message=${message}&status=${status}`);
  }
});

router.get('/list-slots', async (req, res) => {
  const { username } = req.session.admin;
  const card = await Card.find({ admin: username }).populate('time');
  res.render('showslots', { card });
});

router.get('/list-students', async (req, res) => {
  const users = await User.find({});
  res.render('student-profile', { users });
});

module.exports = router;
