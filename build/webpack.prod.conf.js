const webpackBaseConfig = require('./webpack.base.conf');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = merge(webpackBaseConfig, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(['/dist'], {
      root: path.resolve(__dirname, '..'),
      dry: false,
      verbose: true,
    }),
  ]
});