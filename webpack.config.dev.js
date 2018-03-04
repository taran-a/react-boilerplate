const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/*
    Configuration variables
 */
const appTitle = 'React boilerplate';
const distName = 'dist.dev';

module.exports = {
    entry: {
        app: path.join(__dirname, 'src', 'index.jsx'),
    },
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, distName),
        port: 9000,
        compress: true,
        open: true
    },
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
            { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
    }
};
