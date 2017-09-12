import path from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default {
  entry: [
    './node_modules/bootstrap/dist/css/bootstrap.css',
    './src/css/main.css',
    'babel-polyfill',
    './src/js/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
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
  plugins: [new ExtractTextPlugin('css/[name].css')]
}
