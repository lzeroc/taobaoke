var createError = require('http-errors');
var express = require('express');
var path = require('path');
var ejs = require("ejs");
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');

var oauthRouter = require('./routes/oauth');
var taobaoRouter = require('./routes/taobao');

var app = express();

// view engine setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'static'), { maxAge: 3600000 }));

app.engine("html", ejs.__express);
app.set("engin", "html");

app.use('/oauth', oauthRouter);
app.use('/taobao', taobaoRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
