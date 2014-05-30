
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , fs = require('fs')
  , mongoose = require('mongoose')
  , passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy
  , flash = require('connect-flash')
  , path = require('path');

var app = express();
var env = process.env.NODE_ENV || 'development';
var config = require('./config/config')[env];
//Bootstrap db connection
mongoose.connect('mongodb://localhost/is217');
require('./models/user');
require('./models/country');
//require('./models/assignment');
var oneYear = 31557600000;
app.use(express.static(__dirname + '/public', { maxAge: oneYear }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
app.use(express.compress());
app.use(flash());
var User = mongoose.model("User");
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.configure(function(){
  app.set('port', process.env.PORT || 2014);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.set('title', 'World Cup Statistics');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(app.router);
  app.use(require('stylus').middleware(__dirname + '/public'));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

// Bootstrap routes
require('./routes')(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
