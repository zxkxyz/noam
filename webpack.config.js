var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './client/index.jsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "bundle.js"
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