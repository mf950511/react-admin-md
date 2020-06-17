/*
 * @Author: your name
 * @Date: 2020-06-16 10:38:06
 * @LastEditTime: 2020-06-17 13:54:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-md\webpack.config.js
 */ 
const path = require('path')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common, {
  devtool: 'source-map',
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(le|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
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
      }
    ]
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'server',
      analyzerHost: '127.0.0.1',
      analyzerPort: 7778,
      reportFilename: 'report.html',
      defaultSizes: 'parsed',
      openAnalyzer: true,
      generateStatsFile: false,
      statsFilename: 'stats.json',
      statsOptions: null,
      logLevel: 'info'
    }),
    
  ],
  optimization: {
    minimizer: [
      // js压缩
      new TerserWebpackPlugin({
        cache: true, // 启用文件缓存
        parallel: true, // 多线程调用
        sourceMap: true // 错误排查
      }),
      new OptimizeCssAssetsWebpackPlugin({}) // css压缩
    ]
  }
})