const path = require("path");

const nodeExternals = require("webpack-node-externals");

const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  target: "node",
  mode: NODE_ENV ? NODE_ENV : "development",
  entry: path.resolve(__dirname, "../src/server/server.js"),
  output: {
    path: path.resolve(__dirname, "../dist/server"),
    filename: "server.js",
  },

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    alias: {
      react: path.resolve("./node_modules/react"),
    },
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(ts|tsx|jsx|js)$/,
        use: "ts-loader",
      },
    ],
  },
  optimization: { minimize: false },
};
