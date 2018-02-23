const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/*
    Configuration variables
 */
const appTitle = 'React boilerplate';
const distName = 'dist.prod';

module.exports = {
    entry: {
        app: `${__dirname}/src/index.js`,
    },
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, distName),
        filename: '[name].bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: appTitle,
        }),
    ],
    module: {
        rules: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },
};
