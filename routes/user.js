var express = require('express');
var router = express.Router();
const Test = require('../models/test');
const User = require('../models/user');

/* Get to test page. */
router.get('/start-test', async (req, res) => {
    if (!req.session.user) {
        const message = 'Please Login before starting test or Register';
        res.redirect(`/login?message=${message}`);
    } else {
        res.redirect('/user/test');
    }
})
    .get('/test', async (req, res, next) => {
        let test = await Test.find({});
        let counter = 0;
        test = await test.map(el => {
            let a = {'questionNumber': `question${counter}`};
            let obj = {};
            Object.assign(obj, el._doc, a);
            counter++;
            return obj;
        });
        res.render('test', {test});
    })
    .post('/test/submit', async (req, res, next) => {
        const form = JSON.parse(JSON.stringify(req.body));
        const {question0, question1, question2} = form;
        const test = await Test.find({});
        let counter = 0;
        test.forEach(el => {
            if (el.answer === question0)
                counter++;
            else if (el.answer === question1)
                counter++;
            else if (el.answer === question2)
                counter++;
        });
        if(!req.session.user) {
            res.redirect('/login');
        } else {
            await User.findOneAndUpdate({_id: req.session.user._id}, {$set:{test_result: counter}});
            res.redirect('/user/calendar');
        }
    })
    .get('/calendar', (req, res) => {
       res.render('calendar');
    });


module.exports = router;
