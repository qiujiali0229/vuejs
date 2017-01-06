var webpack = require('webpack');

var ET = require('extract-text-webpack-plugin');
module.exports = {
  entry: __dirname + '/src/app.js',
  output: {
    path: __dirname + '/prd/',
    //filename: '[name]-[hash].js'
    //filename: 'bundle-[hash].js'
    filename:'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.js$/,
        //loader: 'babel-loader?presets[]=es2015'
        loader: 'babel'
      },
      {
        test: /\.string$/,
        //loader: 'babel-loader?presets[]=es2015'
        loader: 'string'
      },
      {
        test: /\.scss$/,
        //loader: 'style!css!sass'
        loader: ET.extract('style','css!sass')
      }
    ]
  },
  devServer: {
    contentBase: __dirname + '/prd',
    port: 80,
    host: 'localhost',
    proxy:{
      '/api':{
        target: 'http://localhost:9000',
        pathRewrite: {
          '^/api':''
        }
      }
    }
  },
  plugins:[
    //new webpack.optimize.UglifyJsPlugin(),
    new ET('bundle.css')
  ]
}
