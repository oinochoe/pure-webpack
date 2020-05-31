const path = require('path');
const MyWebpackPlugin = require('./my-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
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
                    publicPath: './dist',
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
    ],
};
