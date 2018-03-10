var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { contents:{title:"Express"}});
});
router.get('/demo', function(req, res, next) {
  res.render('demo', { contents:{title:"Express"}});
});
router.get('/demo2', function(req, res, next) {
  res.render('demo2', { contents:{title:"Express"}});
});
router.get('/searchlist', function(req, res, next) {
  res.render('searchlist', { contents:{title:"Express"}});
});
module.exports = router;