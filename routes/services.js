var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

router.use('/tor',require('./tor'));
router.use('/i2p',require('./i2p'));

module.exports = router;
