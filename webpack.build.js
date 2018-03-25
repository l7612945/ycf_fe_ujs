const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');//生成html文件
const CleanWebpackPlugin = require('clean-webpack-plugin');  //清理输出文件夹
const ManifestPlugin = require('webpack-manifest-plugin');  //生成映射表
const webpack = require('webpack');
const template = require('html-webpack-template');
const common = require('./webpack.common.js');
const merge = require('webpack-merge');
const fs = require("fs");
const glob = require('glob');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

// const hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

let config = merge(common,{
  mode:'production',
  entry: {
    main: './example/buildindex.js'
  },
  optimization: {
        // splitChunks: {
        //     chunks: "initial",
        //     name: "vendor"
        // }
    },
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
        // vue:'Vue'
    },
  output: {
    filename: 'iview.js',
    path: path.resolve(__dirname, './mybuild'),
    publicPath: './mybuild',
    libraryTarget: 'umd',
    library: 'iview',
    umdNamedDefine: true 
  },
  devtool: 'cheap-module-source-map',
  module: {
     rules: [
       
     ]
   },
   plugins: [
      new ManifestPlugin(),
      new CleanWebpackPlugin('./mybuild')
 ]
});


module.exports = config;