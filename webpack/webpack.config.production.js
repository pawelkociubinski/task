const merge = require("webpack-merge");

const baseConfig = require("./webpack.config.base");
const { app, dist } = require("./helpers");

module.exports = merge(baseConfig, {
  mode: "production",
  optimization: {
    concatenateModules: true,
    minimize: true,
    nodeEnv: "production",
    runtimeChunk: true,
    sideEffects: true,
    splitChunks: { chunks: "all" },
  },
  entry: {
    app,
  },
  output: {
    path: dist,
    publicPath: "/",
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].chunk.js",
  },
});
