var webpack = require('webpack');
var path = require('path');
var webpackTargetElectronRenderer = require('webpack-target-electron-renderer');

var config = {
  devtool: "eval",
  entry: [
    'webpack-hot-middleware/client?path=http://localhost:8080/__webpack_hmr',
    'react-hot-loader/patch',
    path.join(__dirname, 'client/index.tsx')
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
        test: /\.tsx?$/,
        loaders: ['ts-loader'],
        include: path.join(__dirname, 'client')
      },
      {
        test: /\.js$/,
        loaders: ['source-map-loader'],
        include: path.join(__dirname, 'client')
      },
      {
        test: /\.css$/,
        loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
};

config.target = webpackTargetElectronRenderer(config);

module.exports = config;