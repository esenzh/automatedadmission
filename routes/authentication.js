const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const Users = require('../models/user');


let saltRounds = 10;

router
    .get('/signup', (req, res) => {
        res.send('signup');
    })
    .post('/signup', async (req, res) => {
        const {first_name, last_name, email, username, password} = req.body;
        const user = new Users(
            {
                first_name: first_name,
                last_name: last_name,
                email: email,
                username: username,
                password: await bcrypt.hash(password, saltRounds)
            }
        );

        const dbusername = await Users.findOne({username});
        const dbemail = await Users.findOne({email});
        if (dbusername && dbusername.username === username) {
            let message = 'Username is already used, please choose another';
            // res.redirect(`/entries/signup?message=${message}`)
        } else if (dbemail && dbemail.email === email) {
            let message = 'Email is already used, please choose another';
            // res.redirect(`/entries/signup?message=${message}`)
        } else {
            await user.save();
            req.session.user = user;
            res.redirect('/home');
        }
    })
    .get('/login', (req, res) => {
        res.send('login');
    })
    .post('/login', async (req, res) => {
        const {username, password} = req.body;
        const user = await Users.findOne({username});

        if (user && (await bcrypt.compare(password, user.password))) {
            req.session.user = user;
            res.redirect('/entries');
        } else {
            let message = 'You are not authorized, please check your username or password!';
            res.redirect(`/login?warningMessage=${message}`);
        }
    });

module.exports = router;