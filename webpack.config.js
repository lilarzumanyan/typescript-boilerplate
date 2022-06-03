const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const nodeEnv = process.env.NODE_ENV || "development";

const isProd = nodeEnv === "production";

module.exports = {
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "index.html"),
      filename: "./index.html"
    })
  ],
  entry: path.resolve(__dirname, "index.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: `index.js`
  },
  devServer: {
    port: 3000
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
  }
};
