const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
   entry: {
      app: './src/index.js'
   },
   output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
   },
   devtool: 'inline-source-map',
   mode: 'production',
   plugins: [
      new HtmlWebpackPlugin({
         title: 'dev test'
      }),
      new CleanWebpackPlugin(['dist']),
      new webpack.NamedChunksPlugin(),
      new webpack.HotModuleReplacementPlugin()
   ],
   module: {
      rules: [
         {
            test: /\.css$/,
            use: [
               'style-loader',
               'css-loader'
            ]
         },
         {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
               'file-loader'
            ]
         },
         {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
               'file-loader'
            ]
         },
         {
            test: /\.(csv|tsv)$/,
            use: [
               'csv-loader'
            ]
         },
         {
            test: /\.xml$/,
            use: [
               'xml-loader'
            ]
         }
      ]
   },
};