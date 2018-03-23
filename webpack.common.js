const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html文件
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


let config = {
    entry: {

    },
    output: {},
    resolve: {
        // alias: {
        //    Vue: 'vue/dist/vue.min.js',
        // },
        // extensions: ['.js', '.vue', '.json']
    },
   externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader', {
                        loader: 'sass-resources-loader'
                    }]
                })
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }],
            },
            {
                test: /\.vue$/,
                use: [{
                    loader: 'vue-loader',
                    options: {
                        loaders: {
                            'scss': ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
                        }
                    }
                }]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [{
                    loader: 'file-loader?name=font/[name].[ext]'
                }]
            }
        ]
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     title: 'Output Management'
        // }),
        new ExtractTextPlugin('[name]/index.css')
    ]
};

module.exports = config;