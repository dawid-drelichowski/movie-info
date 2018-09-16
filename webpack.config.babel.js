import path from 'path'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import UglifyJsPlugin from 'uglifyjs-webpack-plugin'
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin'

const publicPath = path.join(__dirname, 'public')

export default {
  entry: {
    main: [
      './node_modules/bootstrap/dist/css/bootstrap.css',
      './src/css/main.css',
      'babel-polyfill',
      './src/js/index.js'
    ],
    serviceWorker: './src/js/serviceWorker.js'
  },
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
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCssAssetsPlugin()
    ]
  },
  devServer: {
    contentBase: publicPath,
    compress: true,
    port: 3000
  }
}
