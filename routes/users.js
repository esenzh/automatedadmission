var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/calendar', (req, res) => {
  res.render('calendar');
});
module.exports = router;
