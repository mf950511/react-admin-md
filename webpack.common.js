
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const devMode = process.env.NODE_ENV === 'development'
console.log(devMode)
module.exports = {
  entry: {
    app: './index.js',
    test: './index.jsx'
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: '[name]-[hash:5].[ext]',
              outputPath: 'img/'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              optipng: {
                enabled: false
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4
              },
              gifsicle: {
                interlaced: false
              },
              webp: {
                quality: 75
              }
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 文件大小小于limit参数，url-loader将会把文件转为DataUR
              limit: 10000,
              name: '[name]-[hash:5].[ext]',
              ourput: 'fonts/'
            }
          }
        ],
      },
      {
        test: /\.(js)x?$/,
        use: ['babel-loader'],
        exclude: /node-modules/
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({// 将css打包成单独的css文件
      filename: devMode ? '[name].css' : '[name].[hash:5].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash:5].css'
    }),
    new HtmlWebpackPlugin({
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
    new CleanWebpackPlugin(),
  ],
  optimization: { // 公共代码抽离
    splitChunks:{ //启动代码分割，有默认配置项
      chunks: 'all'
    }
  }
}