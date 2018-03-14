const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'src/client/public');
const APP_DIR = path.resolve(__dirname, 'src/client/app');

const config = {
    entry: APP_DIR + '/index.js',
    devServer: {
        port: 5574,
        contentBase: ['./src/client', './src/client/public']
    },
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
        publicPath: '/src/client/public'
    },
    externals: {
        'cheerio': 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: APP_DIR,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[path][name]__[local]--[hash:base64:5]'
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: '/imgs',
                            publicPath: '/imgs'
                        }
                    }
                ]
            }
        ]
    }
};

module.exports = config;
