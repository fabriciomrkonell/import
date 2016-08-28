'use strict';

var express = require('express'),
    path = require('path'),
    logger = require('morgan'),
    compression = require('compression'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    swig = require('swig'),
    mongoose = require('./config/database'),
   	passport = require('passport'),
    service = require('./services/service'),
    process = require('./services/process'),
    expressSession = require('express-session'),
    LocalStrategy = require('passport-local').Strategy,
    _User = require('./models/user'),
    _History = require('./models/history'),
    multiparty = require('connect-multiparty'),
    multipartyMiddleware = multiparty(),
    fs = require('fs');

var routes = require('./routes/index'),
    routes_history = require('./routes/history'),
    routes_configuration = require('./routes/configuration'),
    app = express();

// Configuration
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/')));

// Passport
app.use(require('express-session')({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(_User.authenticate()));
passport.serializeUser(_User.serializeUser());
passport.deserializeUser(_User.deserializeUser());

// Definitions
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.set('view cache', true);
swig.setDefaults({ cache: false });

app.use('/', routes);
app.use('/history', service.isAutenticate, routes_history);
app.use('/configuration', service.isAutenticate, routes_configuration);

app.post('/import', service.isAutenticate, multipartyMiddleware, function(req, res, next) {
  fs.readFile(req.files.file.path, function(err, data) {
    if(err){
      res.send(false);
    }else{
      var newPath = __dirname + '/uploads/' + new Date().getTime() + '_' + req.user._id + '_' + req.files.file.name;
      fs.writeFile(newPath, data, function(err) {
        if(err){
          res.send(false);
        }else{
          var history = new _History();
          history.userId = req.user._id;
          history.aliquot = req.body.aliquot;
          history.dateCreate = new Date();
          history.name = req.files.file.name;
          history.save();
          process.start(req.files.file, req.user.configuration);
          res.send(true);
        }
      });
    }
  });
});

module.exports = app;