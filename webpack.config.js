const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const glob = require("glob");

// Find all HTML files in src (recursively)
const htmlFiles = glob.sync("./src/**/*.html");

// Create an HtmlWebpackPlugin instance for each HTML file
const htmlPlugins = htmlFiles.map(
  (file) =>
    new HtmlWebpackPlugin({
      template: file,
      filename: path.relative("./src", file), // preserves folder structure
      inject: "body",
    })
);

module.exports = {
  entry: "./src/js/main.js",
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "main.js",
    assetModuleFilename: "assets/[name][ext]",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "main.css",
    }),
    ...htmlPlugins,
    new CopyWebpackPlugin({
      patterns: [{ from: "src/assets", to: "assets" }],
    }),
  ],
};
