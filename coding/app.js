var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var WS = require('nodejs-websocket');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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

let websocket = WS.createServer(function(connect){
  connect.on('text', function (str) {
    console.log("message:" + str)
    connect.sendText("My name is wandou");
  })
  connect.on('close', function (code, reason) {
    console.log("关闭连接")
  });
  connect.on('error', function (code, reason) {
    console.log("异常关闭")
  });
}).listen(8001)
console.log("websocket 建立完毕")

module.exports = app;
