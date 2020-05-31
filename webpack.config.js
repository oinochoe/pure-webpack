const path = require('path');
const MyWebpackPlugin = require('./my-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    mode: process.env.NODE_ENV,
    entry: {
        main: './src/app.js',
    },
    output: {
        path: path.resolve('./dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [path.resolve('./my-webpack-loader.js')],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url-loader',
                options: {
                    // publicPath: './dist',
                    name: '[name].[ext]?[hash]',
                    limit: 1027424, //1mb
                },
            },
        ],
    },
    plugins: [
        //new MyWebpackPlugin(),
        new webpack.BannerPlugin(
            `Build date : ${new Date().toLocaleString()}`, // 얘가 원래 webpack에 기본기능으로 있는 찐 플러그인
        ),
        new webpack.DefinePlugin({
            TWO: '1+1',
            VERSION: JSON.stringify('v1.2.3'),
            'API.DOMAIN': JSON.stringify('http://api.server.com'),
        }), // 환경에 따라 api 로직 달리하는 웹팩 플러그인
        new HtmlWebpackPlugin({
            template: './src/index.html',
            templateParameters: {
                env: process.env.NODE_ENV === 'development' ? '개발용' : '',
            },
        }),
    ],
};
