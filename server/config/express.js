var express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    passport = require('passport');

module.exports = function(app, config) {
  app.set('views', config.rootPath + '/public/app');
  app.engine('html', require('ejs').renderFile);
  app.set('view engine', 'html');

  app.use(morgan('dev'));
  app.use(cookieParser());
  app.use(bodyParser());
  app.use(session({secret: 'spaboilerplate mean stack'}));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(express.static(config.rootPath + '/public'));
}