/*
 * @Author: your name
 * @Date: 2020-06-16 10:38:06
 * @LastEditTime: 2020-06-16 17:36:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-md\webpack.config.js
 */ 
const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: './index.js',
    test: './index.jsx'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(le|c)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true //是否打开样式查找
            }
          },
          {
            loader: 'postcss-loader', // 为浏览器加前缀
            options: {
              ident: 'postcss',
              sourceMap: true,
              plugins: loaders => [
                require('autoprefixer')({
                })
              ]
            }
          },
          {
            loader: 'less-loader', // 解析样式文件
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(js)x?$/,
        use: ['babel-loader'],
        exclude: /node-modules/
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      inject: true, // 所有js脚本放于body之后
      hash: true, // 为静态资源生成hash，用于清楚缓存
      cache: true, // 仅在文件被更改时发出文件
      title: 'react admin',
      filename: 'index.html',
      template: path.resolve(__dirname, 'index.html'),
      minify: {
        collapseWhitespace: true, // 折叠空白
        removeComments: true, // 删除注释
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true
      }
    }),
    new CleanWebpackPlugin()
  ]
}