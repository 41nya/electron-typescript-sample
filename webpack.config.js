const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: __dirname +  "/src/index.ts",
  output: {
    filename: "bundle.js",
    path: __dirname + '/dist'
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        loader: "ts-loader"
      }
    ]
  },
  target: 'electron-main',
  devServer: {
    port: 8080,
    open: "Google Chrome",
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};