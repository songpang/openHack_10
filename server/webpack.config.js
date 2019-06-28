const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin}= require('clean-webpack-plugin');

var path = require('path');

const PATHS = {
    src: path.join(__dirname, '../client/src'),    // 소스 파일은 src 폴더에
    build: path.join(__dirname, 'build') // 변환 후 파일은 build 폴더에
};
module.exports = {
    mode:'production',
    entry: PATHS.src,
    resolve: {
        extensions: ['.js']
    },
    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js?$/,
            use: [{ loader:'babel-loader'}],
            include: PATHS.src
             },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: '../client/src/index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin()
    ],
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },
    devtool: 'source-map'

};