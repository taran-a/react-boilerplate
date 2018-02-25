const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/*
    Configuration variables
 */
const appTitle = 'React boilerplate';
const distName = 'dist.dev';

module.exports = {
    entry: {
        app: `${__dirname}/src/index.tsx`,
    },
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, distName),
        filename: '[name].bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: appTitle,
            template: 'assets/index.html',
        }),
    ],
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
};
