const HtmlWebpackPlugin = require('html-webpack-plugin'); // eslint-disable-line
const CleanWebpackPlugin = require('clean-webpack-plugin'); // eslint-disable-line

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    target: 'electron-main',
    plugins: [
        new CleanWebpackPlugin(['dist/**/*']),
        new HtmlWebpackPlugin({
            template: './template/index.html',
            title: '0KPKI',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader'],
            },
            {
                enforce: 'pre',
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'eslint-loader',
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    },
                }],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.less', '.json'],
    },
};
