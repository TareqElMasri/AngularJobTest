const webpack = require('webpack');
const conf = require('./gulp.conf');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const SplitByPathPlugin = require('webpack-split-by-path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const bourbon = require('node-bourbon').includePaths;
const autoprefixer = require('autoprefixer');

module.exports = {
  module: {
    preLoaders: [
    ],

    loaders: [
      {
        test: /.json$/,
        loaders: [
          'json'
        ]
      },
      {
        test: /\.(css|sass|scss)$/,
        loaders: ExtractTextPlugin.extract('style', 'css?minimize!sass?includePaths[]='+bourbon, 'postcss')
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'ng-annotate',
          'babel'
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: conf.path.src('index.html'),
      inject: true
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {unused: true, dead_code: true} // eslint-disable-line camelcase
    // }),
    // Uglify causes issues in console that craches the application
    new SplitByPathPlugin([{
      name: 'vendor',
      path: path.join(__dirname, '../node_modules')
    }]),
    new ExtractTextPlugin('/index-[contenthash].css')
  ],
  postcss: () => [autoprefixer],
  output: {
    path: path.join(process.cwd(), conf.paths.dist),
    filename: '[name]-[hash].js'
  },
  entry: {
    app: [
      `./${conf.path.src('index')}`,
      `./${conf.path.tmp('templateCacheHtml.js')}`
    ]
  }
};
