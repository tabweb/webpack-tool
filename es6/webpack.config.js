const path = require('path')

module.exports = {
  /*入口*/
  entry: path.join(__dirname, 'src/render.jsx'),

  /*输出到dist文件夹，输出文件名字为bundle.js*/
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        include: path.join(__dirname, 'src')
      }
    ]
  }
}