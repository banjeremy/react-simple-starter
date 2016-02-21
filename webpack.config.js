var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: path.join(__dirname, 'src', 'main.js'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.js$/,
        excude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css/,
        loader: 'style!css?modules!postcss'
      }
    ]
  },

  postcss: [
    require('autoprefixer')
  ],

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html')
    }),
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    contentBase: path.join(__dirname, 'public'),
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true
  }
};
