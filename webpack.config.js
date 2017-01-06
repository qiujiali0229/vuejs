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
        loader: 'babel-loader?presets[]=es2015'
<<<<<<< HEAD
<<<<<<< HEAD
        //loader: 'babel'
      },
      {
        test: /\.scss$/,
        //loader: 'style!css!sass'
        loader: ET.extract('style','css!sass')
=======
       // loader: 'babel'
>>>>>>> lijunmin
=======
       // loader: 'babel'
>>>>>>> lijunmin
      },
      {
        test: /\.string$/,
        //loader: 'babel-loader?presets[]=es2015'
        loader: 'string'
      },
      {
<<<<<<< HEAD
      	test: /\.vue$/,
      	loader: 'vue'
      }
    ]
  },
  /*-----------使用babel解析es6-----------*/
  vue: {
  	loaders: {
  		js: 'babel'
  	}
  },
  resolve: {
  	alias: {
  		'vue$':'vue/dist/vue.min.js'
  	}
  },
=======
        test: /\.scss$/,
        //loader: 'style!css!sass'
        loader: ET.extract('style','css!sass')
      },
      {
      	test: /\.vue$/,
      	loader:'vue'
      }
    ]
  },
  
  vue: {
  	loaders:{
  		js: 'babel-loader?presets[]=es2015'
  	}
  },
  
<<<<<<< HEAD
>>>>>>> lijunmin
=======
>>>>>>> lijunmin
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
<<<<<<< HEAD
<<<<<<< HEAD
    new webpack.optimize.UglifyJsPlugin(),
=======
      new webpack.optimize.UglifyJsPlugin(),
>>>>>>> lijunmin
=======
      new webpack.optimize.UglifyJsPlugin(),
>>>>>>> lijunmin
    new ET('bundle.css')
  ]
}
