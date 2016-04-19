var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: "#eval",
  entry: './client/index.jsx',
  output: {
    path: path.join(__dirname, 'public/built'),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
  },
  module: {
    preloaders: [
      {
        test: /\.(js|jsx)?$/,
        loaders: ['eslint'],
        include: path.join(__dirname, 'client')
      }
    ],
    loaders: [
      { 
        test: /\.(js|jsx)?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'client')
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};