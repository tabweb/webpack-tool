const path = require("path");
// 这个插件，每次会自动把js插入到你的模板index.html里面去
var HtmlWebpackPlugin = require("html-webpack-plugin");
//提取公共代码  包含了react,redux,react-router
// 你现在可能发现编译生成的文件app.[hash].js和vendor.[hash].js生成的hash一样的
var webpack = require("webpack");

module.exports = {
  // mode: "development",
  /*入口*/
  entry: {
    app: [path.join(__dirname, "src/index.js")],
    vendor: ["react", "react-router-dom", "redux", "react-dom", "react-redux"]
  },

  /*输出到dist文件夹，
  
  输出文件名字为bundle.js*/
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "[name][hash].js",
    chunkFilename: "[name].js"
  },
  devServer: {
    port: 8080,
    contentBase: path.join(__dirname, "./dist"),
    historyApiFallback: true,
    host: "0.0.0.0"
    // historyApiFallback 任意的404响应都被替代为index.html
    // port 配置要监听的端口。
    // proxy 代理。比如在 localhost:3000 上有后端服务的话，你可以这样启用代理
    // 如果你希望服务器外部可以访问
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      // 文件路径优化
      page: path.join(__dirname, "src/pages"),
      // component: path.join(__dirname, "src/component"),
      // router: path.join(__dirname, "src/router")
      actions: path.join(__dirname, "src/redux/actions"),
      reducers: path.join(__dirname, "src/redux/reducers")
      // redux: path.join(__dirname, "src/redux")
    }
  },
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "src/index.html")
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor"
    })
  ]
};
