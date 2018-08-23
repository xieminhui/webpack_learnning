const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); 

module.exports = merge(common, {
   devtool: 'inline-source-map',
   devServer: {
      contentBase: './dist'
   },
   plugins: [
      new HtmlWebpackPlugin({
         title: 'Code Splitting'
      })
   ]
});