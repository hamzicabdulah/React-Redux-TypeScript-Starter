const path = require("path");

const config = {
  entry: ["./src/index.tsx"],
  output: {
    path: path.resolve(__dirname, "src/public"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: [/public/, /tests/]
      }
    ]
  }
};

module.exports = config;