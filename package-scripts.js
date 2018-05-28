const { series, rimraf } = require("nps-utils");

module.exports = {
  scripts: {
    "start": "NODE_ENV=development webpack-dev-server --config webpack/webpack.config.development.js",
    "publish": series.nps("clean", "build.production"),
    "build": {
      "development": "NODE_ENV=development webpack --config webpack/webpack.config.development.js --color -p --progress --hide-modules --display-optimization-bailout",
      "production": "NODE_ENV=production webpack --config webpack/webpack.config.production.js --color -p --progress --hide-modules --display-optimization-bailout"
    },
    "flow": "flow",
    "clean": rimraf("dist")
  }
};
