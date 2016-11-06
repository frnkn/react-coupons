var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = 'production';

module.exports = {
  /*devtool: 'eval-source-map',*/
  entry: [
    './src'
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: 'dist.js'
  },
  resolve: {
    modulesDirectories: ['node_modules', 'src'],
    extensions: ['', '.js']
  },
  module: {
        loaders: [
        {
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
              presets: ['es2015', 'react']
            }
        }
      ]
    },
    plugins: [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.optimize.AggressiveMergingPlugin({
        compress: { warnings: false },
        sourceMap: false,
        minimize: true,
        mangle: true,
        comments: false
      }),
      new HtmlWebpackPlugin({
        template: 'index.template.ejs',
        inject: 'body',
        hash: true
      })
    ]
}
