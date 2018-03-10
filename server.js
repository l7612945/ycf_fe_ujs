var http = require('http');
// var port = require('./port.js');;
var express = require('express');
var path = require('path');
var router = express.Router();
// var db = require('./db');
// var userApi = require('./api/userApi');

var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var webpackHotMiddleware = require('webpack-hot-middleware');


var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, './dist/'));
app.set('views', path.join(__dirname, 'views/'));  
app.engine('.html', require('ejs').renderFile);  
app.set('view engine', 'html');  
app.use(express.static('dist'));

// webpack编译器
var compiler = webpack(webpackConfig);
// webpack-dev-server中间件
var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
      colors: true
    }
});
app.use(devMiddleware);
app.use(webpackHotMiddleware(compiler));


var routes = require('./router.js');
// var users = require('./routes/users');
app.use('/', routes);
// app.use('/users', users);

// // 后端api路由
// app.use('/api/user', userApi)



var server = app.listen(8888, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Listening at http://localhost:' + port + '\n')
});
