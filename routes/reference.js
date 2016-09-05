'use strict';

var express = require('express'),
		router = express.Router(),
    Reference = require('../models/reference');

router.get('/', function(req, res, next) {
  Reference.find().sort('ncm').exec(function(err, references) {
    res.send({ error: 0, data: references });
  });
});

router.post('/', function(req, res, next) {
  Reference.findById(req.body._id, function(err, reference) {
    if(reference === undefined){
      reference = new Reference();
    }
    reference.ncm = req.body.ncm;
    reference.description = req.body.description;
    reference.save(function(err, reference){
      if(err){
        res.send({ error: 1, message: err.errors });
      }else{
        res.send({ error: 0, data: reference, message: 'Salvo!' });
      }
    });
  });
});

router.delete('/:id', function(req, res, next) {
	Reference.remove({
		_id: req.param('id')
	}, function(err){
    if(err){
      res.send({ error: 1, message: err.errors });
    }else{
      res.send({ error: 0, message: 'Excluído!' });
    }
  });
});

module.exports = router;