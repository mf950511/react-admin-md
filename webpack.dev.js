/*
 * @Author: your name
 * @Date: 2020-06-16 10:38:06
 * @LastEditTime: 2020-06-17 13:53:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-md\webpack.config.js
 */ 
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
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
      }
    ]
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  devServer: {
    contentBase: './dist', // 静态文件目录，用于浏览器显示
    // clientLogLevel: 'warning',  // 输出日志级别
    hot: true, // 启动热更新
    publicPath: '/', // 浏览器访问路径
    compress: true, // 启用gzip压缩
    port: 8822,
    open: true, // 自动调起浏览器
    overlay: { // 出现错误或警告是否覆盖页面线上错误信息
      warnings: true,
      errors: true
    },
    quiet: true,
    proxy: { // 代理
    },
    watchOptions: { // 监控文件相关配置
      poll: true,
      ignored: /node_modules/,
      aggregateTimeout: 300  // 默认值, 当你连续改动时候, webpack可以设置构建延迟时间(防抖)
    }
  }
})