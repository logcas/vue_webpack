const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.conf');
const path = require('path');
const webpack = require('webpack');

module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, '..', 'dist'),
    port: 8080,
    hot: true,
    open: true,
    compress: false,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ]
});