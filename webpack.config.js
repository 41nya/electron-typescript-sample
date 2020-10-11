const HtmlWebpackPlugin = require('html-webpack-plugin');

const mainConfig = {
  target: 'electron-main',
  mode: 'development',
  entry: __dirname + '/src/main/main.ts',
  output: {
    filename: 'main.js',
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
  resolve: {
    extensions: [".ts", ".js"]
  }
};

const rendererConfig = {
  target: 'electron-renderer',
  mode: 'development',
  entry: __dirname + '/src/renderer/renderer.ts',
  output: {
    filename: 'renderer.js',
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
  resolve: {
    extensions: [".ts", ".js"],
    mainFields: ['main', 'browser']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};

module.exports = [mainConfig, rendererConfig];