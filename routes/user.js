var express = require('express');
var router = express.Router();
const Test = require('../models/test');

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
        let newTest = [...test];
        let counter = 0;
        newTest[0].a = '123';
        console.log(newTest);


        // for (let i = 0; i < test.length; i++) {
        //     let b = 123;
        //     console.log(b);
        //     test[i].a = b;
        //     console.log(test[i]);
        //     break;
        // }
        // console.log('Testing');
        // console.log(test);
        // test.forEach(each => {
        //     console.log(each);
        //     each.questionNumber = counter;
        //     counter++;
        // });
        res.render('test', {test});
    })
    .post('/test/submit', async (req, res, next) => {
        console.log(req.body)
    });


module.exports = router;
