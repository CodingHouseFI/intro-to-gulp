var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/bacon', function(req, res, next) {
  res.send('bacon!!\n');
});

module.exports = router;
