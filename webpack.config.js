module.exports = {
  entry: './main.js',
  output: {
    path: './public',
    filename: 'index.js'
  },
  devServer: {
    inline: true,
    port: 8080,
    contentBase: './public'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
