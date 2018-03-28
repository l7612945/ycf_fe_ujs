const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html文件
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


let config = {
    entry: {

    },
    output: {},
    resolve: {
        alias: {
          
        }
        // extensions: ['.js', '.vue', '.json']
    },
   externals: {
        vue: "Vue"
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: ["style-loader","css-loader"]
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
                    fallback: "style-loader",
                    use: [
                    'css-loader'
                    ,
                    'sass-loader',
                     {
                        loader: 'sass-resources-loader',
                        options: {
                            // Provide path to the file with resources
                            resources: ['./src/sassCore/mixins/mixins.scss','./src/sassCore/common/global.scss']
                          },
                    }
                    ]
                })
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: false
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
        new ExtractTextPlugin('[name]/index.css'),
        new OptimizeCssAssetsPlugin({
          assetNameRegExp:  /\.css$/g,
          cssProcessor: require('cssnano'),
          cssProcessorOptions: { discardComments: { removeAll: true } },
          canPrint: true
        })
    ]
};

module.exports = config;