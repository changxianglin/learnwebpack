const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'public')
  },
  devServer: {
    compress: true,
    port: 9000,
    open: true,
  }
}