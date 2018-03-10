const HtmlWebpackPlugin = require('html-webpack-plugin'),
    webpack = require('webpack'),
    path = require('path'),
    vue = require('vue'),
    glob = require('glob'),
    fs = require('fs'),
    os = require('os'),
    UglifyJsParallelPlugin = require('webpack-uglify-parallel'),

    entries = {}, // js入口
    newEntries = {},
    jsRoot = 'src/js/',
    htmlRoot = 'src/html/',
    htmls = glob.sync('src/html/**/*.html'),
    htmlCfgs = []; // HtmlWebpackPlugin配置项

//动态获取入口文件，使得html、js的路径一致
htmls.forEach((filepath) => {
    let paths = filepath.split('/'), // 以 html/user_center/index.html 截断成数组为例
        file = paths.pop(), // 如 index.html
        path = paths.join('/') + '/', // 如html/user_center/
        names = /^([\s\S]+).html$/i.exec(file),
        devPath = path, // 如html/user_center/
        prefix = devPath.slice(htmlRoot.length); // 如user_center/;

    if (names) {

        newEntries[prefix + names[1]] = [__dirname + '/' + jsRoot + prefix + names[1]];

        //生成html文件
        htmlCfgs.push(new HtmlWebpackPlugin({
            filename: prefix + file, //http访问路径
            template: __dirname + '/' + filepath, //实际文件路径
            inject: true,
        }));
    }
});

module.exports = {
    entry: newEntries,
    output: {
        path: __dirname + "/build/",
        filename: "js/[name].js?v=" + new Date().getTime()
    },

    //webpack 4.x 新增写法
    optimization: {
        splitChunks: {
            chunks: "initial",
            name:"vendor"
        }
    },

    module: { //在配置文件里添加JSON loader
        rules: [{
                test: /\.json$/,
                loader: "json"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader', //在webpack的module部分的loaders里进行配置即可
                query: {
                    presets: ['es2015']
                }
            },
            // 为了统计代码覆盖率，对 js 文件加入 istanbul-instrumenter-loader
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                include: /src|packages/,
                enforce: 'post',
                use: [{
                    loader: "istanbul-instrumenter-loader",
                    options: {
                        esModules: true
                    },
                }]
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader' //添加对样式表的处理
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },
            {
                test: /\.vue$/,
                use: [{
                    loader: 'vue-loader',
                    options: {
                        loaders: {
                            'scss': 'style-loader!css-loader!sass-loader',
                            // 为了统计代码覆盖率，对 vue 文件加入 istanbul-instrumenter-loader
                            // preLoaders: {
                            //     js: 'istanbul-instrumenter-loader?esModules=true'
                            // }
                        }
                    }
                }]
            }, {
                test: /\.html$/,
                loader: 'raw-loader' // loaders: ['raw-loader'] is also perfectly acceptable.
            }


        ]
    },

    resolve: {
        alias: {
            vue: 'vue/dist/vue.min.js',
            zepto: 'webpack-zepto',
        },
        extensions: ['.js', '.vue', '.json'],
    },

    plugins: htmlCfgs,

    externals: {
        // require("jquery") 是引用自外部模块的
        // 对应全局变量 jQuery
        jquery: 'jQuery'
    },


    devServer: {
        contentBase: "./src/html", //本地服务器所加载的页面所在的目录
        //historyApiFallback: true, //不跳转
        inline: true, //实时刷新
        hot: true,
        //host: '192.168.10.234', //改成本机ip地址或'localhost'，用Ip地址的目的是让局域网的网段都可以访问该服务
        port: 9191
    }
};