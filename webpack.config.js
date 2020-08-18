const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode:"development",
    resolve: {
        extensions: ['.js', '.jsx', '.tsx', '.ts']
    },
    module: {
        rules: [
            {
                test: /\.html/,
                use: ['html-loader']
            },
            {
                test: /\.tsx?$/,
                use: ['ts-loader']
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 8888
    }
}

