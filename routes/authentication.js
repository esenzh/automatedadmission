/* eslint-disable camelcase */
const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();
const Users = require('../models/user');
const Admins = require('../models/admin');

const saltRounds = 10;

router
  .get('/signup', (req, res) => {
    const { message } = req.query;
    res.render('signup', { message });
  })
  .post('/signup', async (req, res) => {
    const {
      first_name,
      last_name,
      email,
      username,
      password,
    } = req.body;
    const user = new Users({
      first_name,
      last_name,
      email,
      username,
      password: await bcrypt.hash(password, saltRounds),
    });
    const dbusername = await Users.findOne({ username });
    const dbemail = await Users.findOne({ email });
    if (dbusername && dbusername.username === username) {
      const message = 'Username is already used, please choose another';
      res.redirect(`/signup?message=${message}`);
    } else if (dbemail && dbemail.email === email) {
      const message = 'Email is already used, please choose another';
      res.redirect(`/signup?message=${message}`);
    } else {
      await user.save();
      req.session.user = user;
      res.redirect('/user/test');
    }
  })
  .get('/login', (req, res) => {
    const { message } = req.query;
    res.render('login', { message });
  })
  .post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await Users.findOne({ username });
    const admin = await Admins.findOne({ username });

    if (user && (await bcrypt.compare(password, user.password))) {
      req.session.user = user;
      res.redirect('/user/test');
    } else if (admin && (await bcrypt.compare(password, admin.password))) {
      req.session.admin = admin;
      res.redirect('/admin/home');
    } else {
      const message = 'You are not authorized, please check your username or password!';
      res.redirect(`/login?message=${message}`);
    }
  })
  .get('/logout', async (req, res, next) => {
    if (req.session.user || req.session.admin) {
      try {
        await req.session.destroy();
        res.clearCookie('user_sid');
        res.redirect('/');
      } catch (error) {
        next(error);
      }
    } else {
      res.redirect('/login');
    }
  });

module.exports = router;
