const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'production',
  entry: {
    filename: path.resolve(__dirname, 'src/js/app.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },

  module: {
    rules: [{
      test: /\.(?:js|mjs|cjs)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
    },
      test: /\.css$/i,
      use: [MiniCssExtractPlugin.loader, "css-loader"] 
    }],
  },

  plugins: [
    new htmlWebpackPlugin({
      title: 'Legend',
      fileName: '[name].html',
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ]
}