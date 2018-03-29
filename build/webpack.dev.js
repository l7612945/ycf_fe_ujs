const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html文件
const webpack = require('webpack');
const common = require('./webpack.common.js');
const merge = require('webpack-merge');
const template = require('html-webpack-template');
const fs = require("fs");
const glob = require('glob');
const hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

let config = merge(common, {
    mode: 'development',
    entry: {
       
    },
    optimization: {
        splitChunks: {
           chunks: "initial",
            name: 'vendor'           
        }
    },
    externals: {
        // vue: {
        //     root: 'Vue',
        //     commonjs: 'vue',
        //     commonjs2: 'vue',
        //     amd: 'vue'
        // }
        vue:'Vue'
    },
    output: {
        filename: '[name]/index.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    devtool: 'source-map',
    module: {
        rules: [

        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
        // new BundleAnalyzerPlugin()
    ]
});


function getEntries(globPath) {
    const files = glob.sync(globPath),
        entries = {};
    files.forEach(function(filepath) {
        // 取倒数第二层(view下面的文件夹)做包名
        const split = filepath.split('/');
        let name = split[split.length - 2];
        name = split[split.length - 3]+"/"+name.split('.')[0];
        entries[name] = ['./src/' + split[2] + "/" + split[3] + "/views.js", './src/' + split[2] + "/" + split[3] + "/index.html",split[2]];
    });

    return entries;
}
const entries = getEntries('./src/**/index.html');


Object.keys(entries).forEach(function(name) {
    // // 每个页面生成一个entry，如果需要HotUpdate，在这里修改entry
    config.entry[name] = [entries[name][0], hotMiddlewareScript];
    // //每个页面生成一个html
    let type = (entries[name][2]=='widgets')?'widgets':'module';
    const plugin = new HtmlWebpackPlugin({
        // 生成出来的html文件名
        filename:  name + '.html',
        minify: false,
        // 每个html的模版，这里多个页面使用同一个模版
        // template: template,
        // // devServer: 'http://localhost:8899',
        // // inlineManifestWebpackName: 'webpackManifest',
        // bodyHtmlSnippet: fs.readFileSync(entries[name][1]),
        // // 自动将引用插入html
        // inject: false,

        template: entries[name][1],
      // 自动将引用插入html
        inject: 'body',
        title: type+'_'+name,
        links:[
            {
              href: '/favicon.png',
              rel: 'icon',
              sizes: '32x32',
              type: 'image/png'
            }
        ],
        scripts:[
            'https://unpkg.com/vue@2.5.3/dist/vue.js'
        ],
        // 每个html引用的js模块，也可以在这里加上vendor等公用模块
        chunks: ['vendor',name]
    });
    // console.log(name)
    config.plugins.push(plugin);
})

module.exports = config;