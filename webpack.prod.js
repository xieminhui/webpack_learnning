const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
   optimization: {
      splitChunks: {
         automaticNameDelimiter:'.',
         name: true
      },
      cacheGroups: {
         vendors: {
           test: /[\\/]node_modules[\\/]/,
           priority: -10,
           name: 'vendor'
         },
         default: {
           minChunks: 2,
           priority: -20,
           reuseExistingChunk: true
         }
      }  
   },
   plugins: [
      new UglifyJsPlugin({
         sourceMap: true
      }),
      new webpack.DefinePlugin({
         'process.env.NODE_ENV': JSON.stringify('production')
      })
   ],
});

