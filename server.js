const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

const favicon = require('express-favicon');
const path = require('path');

const app = express();
const config = require('./webpack.dev.js');
const compiler = webpack(config);


// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));

// app.use(app.favicon(path.join(__dirname,'favicon.ico')));
app.use(favicon(__dirname + '/favicon.png'));
// Serve the files on port 9000.
app.listen(9000, function () {
  console.log('Example app listening on port 9000!\n');
});