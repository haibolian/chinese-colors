const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV == 'production' ? '/chinese-colors/' : '/',
  chainWebpack(config){
    config.plugin('html').tap(args => {
      args[0].title = '中国色 - 中国传统颜色'
      return args
    })
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://zhongguose.com',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}