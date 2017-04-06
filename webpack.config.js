const path = require("path");
const webpack = require("webpack");
const WebpackNotifierPlugin = require("webpack-notifier");

module.exports = {
  watch: false, // dynamically changed by gulp
  devtool: "source-map",
  output: {
    filename: "[name].js",
    publicPath: "/"
  },
  // Exposing external libs (loaded from cdn)
  externals: {
    jquery: "jQuery"
  },
  resolve: {
    extensions: ["", ".js", ".json"],
    root: [path.resolve("./build/assets/js")]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          "babel-loader" // babel config is located in .babelrc
        ]
      },
      {
        test: /\.json$/,
        loaders: ["json"]
      }
    ]
  },
  plugins: [new WebpackNotifierPlugin()]
};
