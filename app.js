var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var blog = require('./routes/blog');
var services = require('./routes/services');
var products = require('./routes/products');
var contact_us = require('./routes/contact_us');
// var products = require('./routes/products');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);      //如果访问的是根目录，那么就用index对应的函数还响应。这样就会直接跳转到index.js中去执行。
app.use('/index.html', index);// 与访问更目录一样的动作
app.use('/users', users);
app.use('/blog.html', blog);
app.use('/blog', blog);
app.use('/services.html', services);
app.use('/services', services);
app.use('/products.html', products);
app.use('/products', products);
app.use('/contact_us.html', contact_us);
app.use('/contact_us', contact_us);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
