const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: './src/index.tsx',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    devServer: {
        hot: true,
        liveReload: true,
        quiet: true,
        compress: true,

    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 
                    [
                        {
                            loader: 'babel-loader',
                            options: {
                                plugins: [
                                    "@babel/plugin-syntax-dynamic-import",
                                    "@babel/plugin-proposal-export-default-from",
                                ]
                            }
                        },
                        {
                            loader: 'eslint-loader',
                        },
                        {
                            loader: 'awesome-typescript-loader',
                        }
                    ]
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new BundleAnalyzerPlugin({
            openAnalyzer: false,
            logLevel: 'warn',
        }),
        new FriendlyErrorsWebpackPlugin({
            compilationSuccessInfo: {
                messages: [
                    'Server: http://localhost:8080',
                    'Bundle: http://localhost:8888',
                ],
            },
        }),
    ],
};
