'use strict';

var express = require('express'),
		router = express.Router(),
    User = require('../models/user');

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

router.get('/:id', function(req, res, next) {
  User.findById(req.param('id'), function(err, user){
    if(err){
      res.send({ error: 1, message: err.errors });
    }else{
      res.send({ error: 0, data: user.configuration });
    }
  });
});

router.post('/:id', function(req, res, next) {
   User.findById(req.param('id'), function(err, user){
    if(err){
      res.send({ error: 1, message: err.errors });
    }else{
      user.configuration = req.body;
      user.save(function(err){
        if(err){
          res.send({ error: 1, message: err.errors });
        }else{
          res.send({ error: 0, data: user, message: 'Salvo!' });
        }
      });
    }
  });
});

module.exports = router;