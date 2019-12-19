var express = require('express');
var router = express.Router();
const Test = require('../models/test');

/* Get to test page. */
router.get('/test', async (req, res, next) => {
    const test = await Test.find({});
    res.render('test', {test});
});

router.get('/start-test', async (req, res) => {
    if (!req.session.user) {
      const message = 'Please Login before starting test or Register';
      res.redirect(`/login?message=${message}`);
    } else {
        res.redirect('/user/test');
    }
});

module.exports = router;
