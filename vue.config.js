module.exports = {
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