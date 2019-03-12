const HtmlWebPackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');
const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

var browserConfig = {
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { 
        test: /\.(js)$/,
        use: 'babel-loader', 
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['css-loader'],
      },
    ]
  },
  devServer: {
    proxy: {
      '/api/**': {
        target: 'http://localhost:3000',
        secure: false,
        changeOrigin: true,
        headers: {
          Connection: 'keep-alive',
        },
      }
    },
    historyApiFallback: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "true"
    }),
    new webpack.DefinePlugin({
      'process.env': {
         S3_URL: process.env.S3_URL
      }
    }),
    new Dotenv({
      path: './.env',
      safe: true,
    })
  ]
}

var serverConfig = {
  entry: ['@babel/polyfill', './src/server/index.js'],
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: __dirname,
    filename: 'server.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      {
        test: /\.css$/,
        use: ['css-loader'],
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "false"
    })
  ]
}

module.exports = [browserConfig, serverConfig]