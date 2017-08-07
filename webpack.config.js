// const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'game.bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}
