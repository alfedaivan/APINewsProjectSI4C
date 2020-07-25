var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

const db = require('./db.config')
db.connect();

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// app.use('/users', usersRouter);

module.exports = app;


//api3
const passport = require('./passport')
 
app.use(passport.initialize())
app.use(passport.session())

app.use('/', indexRouter);

