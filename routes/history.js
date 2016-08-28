'use strict';

var express = require('express'),
		router = express.Router(),
    _History = require('../models/history');

router.get('/', function(req, res, next) {
  _History.find({
    userId: req.user._id
  }).sort('-dateCreate').limit(10).exec(function(err, histories) {
    res.send({ error: 0, data: histories });
  });
});

module.exports = router;