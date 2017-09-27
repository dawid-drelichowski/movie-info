import path from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const publicPath = path.join(__dirname, 'public')

export default {
  entry: [
    './node_modules/bootstrap/dist/css/bootstrap.css',
    './src/css/main.css',
    'babel-polyfill',
    './src/js/index.js'
  ],
  output: {
    path: publicPath,
    filename: 'js/[name].js'
  },
  resolve: {
    modules: [__dirname, path.join(__dirname, 'src/js'), 'node_modules']
  },
  module: {
    rules: [
      {test: /\.css$/, use: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})},
      {test: /\.js$/, exclude: /node_modules|config.json/, loader: 'babel-loader'}
    ]
  },
  plugins: [new ExtractTextPlugin('css/[name].css')],
  devServer: {
    contentBase: publicPath,
    compress: true,
    port: 3000
  }
}
