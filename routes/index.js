'use strict';

var express = require('express'),
		router = express.Router(),
		passport = require('passport'),
		User = require('../models/user'),
		service = require('../services/service');

router.get('/', service.isAutenticate, function(req, res, next) {
  res.render('layouts/default', {
  	title: 'Início',
  	page: '../inicio.html',
  	requiresJS: ['app/controllers/inicio']
  });
});

router.get('/historico', service.isAutenticate, function(req, res, next) {
  res.render('layouts/default', {
    title: 'Histórico',
    page: '../history.html',
    requiresJS: ['app/controllers/history']
  });
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