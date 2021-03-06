const HtmlWebpackPlugin = require('html-webpack-plugin')
// import HtmlWebpackPlugin from 'html-webpack-plugin'
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

const path = require('path')
const fs = require('fs')

const appDirectory = fs.realpathSync(process.cwd())
module.exports = {
  entry: [/* '@babel/polyfill', */ /* './polyfill.js', */ './src/index.js'],
  output: {
    path: path.resolve(appDirectory, 'build'),
    filename: '[name].[contenthash:8].bundle.js',
    chunkFilename: '[name].[contenthash:8].chunk.js'
  },
  mode: 'production',
  // devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              // ['@babel/preset-env', { useBuiltIns: 'entry' }],
              ['@babel/preset-env', { useBuiltIns: 'usage' }],
              ['@babel/preset-react']
            ]
            // plugins: ['@babel/plugin-syntax-dynamic-import']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    }),
    new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin()
  ]
}
