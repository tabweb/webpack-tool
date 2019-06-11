const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
module.exports = {
  // 现在运行在开发环境中，在部署到正式环境下时，要确保它是处于production的模式。
  // 需要将代码打包部署到生产环境时需要进行如下配置
  mode: "development",
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./dist"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000
        }
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js" // 'vue/dist/vue.common.js' for webpack 1
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "vue demo",
      template: "index.html"
    }),
    // 局部刷新即只刷新修改的部分
    new webpack.HotModuleReplacementPlugin({}),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"production"'
      }
    })
    // new webpack.config.optimization.minimize({
    //   compress: {
    //     warnings: false
    //   }
    // })
  ]
};
