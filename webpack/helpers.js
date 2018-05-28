const { join } = require("path");

const app = join(process.cwd(), "src", "index.js");
const dist = join(process.cwd(), "dist");

module.exports = {
  app,
  dist
};
