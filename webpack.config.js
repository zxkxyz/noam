var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: "eval",
  entry: [
    'webpack-hot-middleware/client?path=http://localhost:8080/__webpack_hmr',
    './client/index.jsx'
    ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: "bundle.js",
    publicPath: 'http://localhost:8080/public'
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
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'client')
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
};