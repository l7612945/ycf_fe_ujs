const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

const favicon = require('express-favicon');
const path = require('path');

const app = express();
const config = require('./webpack.dev.js');
const compiler = webpack(config);


const fs = require('fs');
const myconfig = require('../config.js');
fs.readFile('./src/sassCore/mixins/config.scss', 'utf8', function(err, data){
 	let _d = data;
 	console.log(_d.match(/\$isrem: [a-zA-Z0-9_-]*;/g))
 	_d = _d.replace(/\$isrem: [a-zA-Z0-9_-]*;/, "");
 	if(myconfig.isrem){
 		_d+='$isrem: true;'
 	}else{
 		_d+='$isrem: false;'
 	}
   fs.writeFile('./src/sassCore/mixins/config.scss', _d,function(err){
	    if(err) console.log('写文件操作失败');
	    else console.log('写文件操作成功');
	}); 
});

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));

// app.use(app.favicon(path.join(__dirname,'favicon.ico')));
app.use(favicon(__dirname + '/favicon.png'));
// Serve the files on port 9000.
app.listen(8899, function () {
  console.log('Example app listening on port 8899!\n');
});