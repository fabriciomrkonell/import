'use strict';

var express = require('express'),
		router = express.Router(),
    _History = require('../models/history');

router.get('/', function(req, res, next) {
  _History.find({
    userId: req.user._id
  }, function(err, histories) {
    res.send({ error: 0, data: histories });
  });
});

module.exports = router;