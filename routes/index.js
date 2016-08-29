'use strict';

var express = require('express'),
		router = express.Router(),
		passport = require('passport'),
		User = require('../models/user'),
    Process = require('../models/process'),
		service = require('../services/service'),
    simpleTableList = require('../services/simpleTable');

router.get('/', service.isAutenticate, function(req, res, next) {
  res.render('layouts/default', {
  	title: 'Início',
  	page: '../index.html',
  	requiresJS: ['app/controllers/index'],
    simpleTableList: simpleTableList
  });
});

router.get('/historico', service.isAutenticate, function(req, res, next) {
  res.render('layouts/default', {
    title: 'Histórico',
    page: '../history.html',
    requiresJS: ['app/controllers/history']
  });
});

router.get('/tabela-simples', service.isAutenticate, function(req, res, next) {
  res.render('layouts/default', {
    title: 'Tabela Simples',
    page: '../simpleTable.html',
    requiresJS: [],
    simpleTableList: simpleTableList
  });
});

router.get('/configuracao', service.isAutenticate, function(req, res, next) {
  res.render('layouts/default', {
    title: 'Configuração',
    page: '../configuration.html',
    requiresJS: ['app/controllers/configuration']
  });
});

router.get('/processo/:id', service.isAutenticate, function(req, res, next) {
  Process.findById(req.param('id'), function(err, process){
    res.render('layouts/defaultProcess', {
      process: process
    });
  })
});

router.get('/login', function(req, res, next) {
  res.render('layouts/login', {
  	title: 'Login'
  });
});

router.get('/logout', function(req, res, next) {
  req.session.destroy();
  req.logOut();
  res.redirect('/')
});

router.post('/login', function(req, res, next) {
   passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.redirect('/login?error'); }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.redirect('/');
    });
  })(req, res, next);
});

router.post('/register', function(req, res) {
  console.log('Recording user: ' + req.body.username);
  User.register(new User({
    username : req.body.username
  }), req.body.password, function(err, user) {
    if (err) {
      console.log(err);
    	res.redirect('/login');
    }
    passport.authenticate('local')(req, res, function () {
      res.redirect('/');
    });
  });
});

module.exports = router;