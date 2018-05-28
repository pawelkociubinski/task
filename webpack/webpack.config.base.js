const { join } = require("path");
const webpack = require("webpack");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  target: "web",
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".pug", ".css"],
  },
  plugins: [
    new Dotenv({ path: "./.env" }),
    new webpack.EnvironmentPlugin(["NODE_ENV"]),
    new ExtractTextWebpackPlugin("[name].css"),
    new HtmlWebpackPlugin({
      template: "src/index.pug",
      inject: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.pug$/,
        use: "pug-loader",
      },
      {
        test: /\.css$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: "style-loader",
          use: "css-loader",
        }),
      },
    ],
  },
};
