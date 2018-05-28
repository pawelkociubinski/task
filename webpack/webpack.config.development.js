const { join } = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const CircularDependencyPlugin = require("circular-dependency-plugin");

const baseConfig = require("./webpack.config.base");
const { app, dist } = require("./helpers");

module.exports = merge(baseConfig, {
  mode: "development",
  devtool: "eval-source-map",
  optimization: {
    minimize: false,
  },
  performance: {
    hints: false,
  },
  entry: {
    app,
  },
  output: {
    path: dist,
    publicPath: "/",
    filename: "[name].js",
    chunkFilename: "[name].chunk.js",
  },
  plugins: [
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: false,
    }),
  ],
  devServer: {
    contentBase: join(process.cwd(), "dist"),
    publicPath: "/",
    historyApiFallback: true,
  },
});
