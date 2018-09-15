import path from 'path'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

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
      {test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader']},
      {test: /\.js$/, exclude: /node_modules|config.json/, loader: 'babel-loader'}
    ]
  },
  plugins: [new MiniCssExtractPlugin({filename: 'css/[name].css'})],
  devServer: {
    contentBase: publicPath,
    compress: true,
    port: 3000
  }
}
