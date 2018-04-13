//Require the webpack and path
const webpack = require('webpack');
const path = require('path');

//Set up Dist and Src Directories
const DIST_DIR = path.resolve(__dirname, "dist");

//Set up configuration
const config = {
  entry: ['babel-polyfill', './src/app/index.js'],
  output: {
    path: DIST_DIR + '/app/',
    filename: 'bundle.js',
    publicPath: '/app/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015', 'stage-0']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: ['file-loader']
      },
      {
        test: /\.json$/,
        use: ['json-loader']
      }
    ]
  }
}

//Export config
module.exports = config;
