var path = require("path");
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var autoprefixer = require('autoprefixer');
var es3ifyPlugin = require('es3ify-webpack-plugin');

module.exports = {
  // devServer: {
  //   historyApiFallback: true,
  //   hot: true,
  //   inline: true,
  //   progress: true,
  //   contentBase: '/',
  //   port: 8080
  // },
  // entry : [ //如果使用这种配置配置webpack-dev-server，那么上面的devServer与plugins中的webpack.HotModuleReplacementPlugin()可以去掉
  //   "webpack/hot/dev-server",
  //   "webpack-dev-server/client?http://localhost:8080",
  //   path.resolve(__dirname, "app/main.js")
  // ],
  /*
  单入口
  entry : path.resolve(__dirname, "app/main.js"),
  output : {
    path : path.resolve(__dirname, "build"),
    filename : "bundle.js"
  },
  */
  entry : {
    bundle : path.resolve(__dirname, "app/main.js"),
    xxx : path.resolve(__dirname, "app/xxx.js"),
    vendors : ["react", "react-dom", "jquery", "react-router"]
  },
  output : {
    path : path.resolve(__dirname, "build"),
    filename : "[name].min.js",
    //publicPath : '',
  },
  resolve : {
    extensions:["",".js",".json",".jsx",".es6","css","scss","png","jpg","jpeg"]
  },
  module : {
    /*
      配置参数
      test    正则表达式匹配
      loader  匹配的文件, "-loader"可以省略
      include 需要处理的目录包括进来
      exclude 排除不需要处理的目录
      query   参数
    */
    loaders : [
      {
        test : /\.js[x]?$/,
        exclude: /node_modules/,
        loader : "babel",
        query: {
            presets: ['es2015', 'stage-0', 'react']
        },
        //plugins: ["transform-runtime"]
      },
      // {
      //   loader : "babel",
      //   exclude: /node_modules/,
      //   query: {
      //     plugins: [
      //       "transform-runtime"
      //     ],
      //     presets: ['es2015', 'stage-0']
      //   }
      // },
      {
        test : /\.css$/,
        //loader : "style!css"
        //loader : ExtractTextPlugin.extract("style", "css!postcss")
        loader : ExtractTextPlugin.extract(["css?-autoprefixer", "postcss"])
        //生产环境需要添加?-autoprefixer才能编译出css并自动添加浏览器样式前缀;
        //其实是打包压缩的时候自行删除掉了过时的前缀,通过添加该命令来禁止删除过时的样式前缀
      },
      {
        test: /\.scss$/,
        //loader: 'style!css!sass'
        //loader : ExtractTextPlugin.extract("style", "css!sass!postcss")
        loader : ExtractTextPlugin.extract(["css?-autoprefixer", "sass?-autoprefixer", "postcss"])
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url', //url?limit=25000
        query : {limit : 10000, name:'images/[name].[ext]'}
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg)((\?|\#)[\?\#\w\d_-]+)?$/,
        loader: "url",
        query: {limit: 10000, name: 'fonts/[name].[ext]'}
      }
    ]
  },
  postcss : [autoprefixer({browsers:["last 3 version", "Firefox >= 15", "IE >= 10", "Opera >= 12"]})],//{browsers:['last 2 versions']}
  plugins : [
    //new es3ifyPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
         NODE_ENV: JSON.stringify("production")
       }
    }),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js', Infinity),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
    new ExtractTextPlugin("[name].min.css"),
    new HtmlWebpackPlugin({
      title: "I am index.html",
      template : path.resolve(__dirname, "build/__index.html"),
      filename : "index.html",
      chunks : ["vendors", "bundle"],
      inject : "body"
    }),
    new HtmlWebpackPlugin({
      title: "I am xxx.html",
      template : path.resolve(__dirname, "build/__index.html"),
      filename : "xxx.html",
      chunks : ["vendors", "xxx"],
      inject : "body"
    }),
    //new webpack.HotModuleReplacementPlugin(),
    //new webpack.NoErrorsPlugin(),
    new CopyWebpackPlugin([
      { from: path.resolve(__dirname, "build"), to: '../copy' }
    ]),
  ]
}
