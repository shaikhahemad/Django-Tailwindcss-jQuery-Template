const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './assets/script/index.js',
  output: {
    path: path.resolve(__dirname, 'core', 'static'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      // Added rule to handle JavaScript files
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'assets', 'style'),
        use: ['style-loader',
          'css-loader',
          'postcss-loader'],
      },
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
};