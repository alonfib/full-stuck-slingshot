var express = require('express');
const { Meteors } = require('../db/collections/meteors');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(Meteors);
});

module.exports = router;
