const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack")
const {resolve} = require('path')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = {
  devtool: "source-map",
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
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
        use: {
          loader: "source-map-loader"
        }
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "awesome-typescript-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      logLevel: 'warn',
    }),
    new ForkTsCheckerWebpackPlugin({
      useTypescriptIncrementalApi: true,
      checkSyntacticErrors: true,
      tsconfig: resolve('./tsconfig.json'),
      tslint: resolve('./tslint.json'),
    }),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [
          'Server: http://localhost:8080',
          'Bundle: http://localhost:8888'
        ],
      }
    })
  ]
};