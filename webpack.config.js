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
      },
      {
        test: /\.css$/,
        loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
};
