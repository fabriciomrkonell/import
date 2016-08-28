'use strict';

var express = require('express'),
		router = express.Router();

router.post('/', function(req, res, next) {
	req.user.configuration = req.body;
  req.user.save(function(err){
    if(err){
      res.send({ error: 1, message: err.errors });
    }else{
      res.send({ error: 0, data: req.user, message: 'Salvo!' });
    }
  });
});

router.get('/', function(req, res, next) {
	res.send({ error: 0, data: req.user.configuration });
});

module.exports = router;