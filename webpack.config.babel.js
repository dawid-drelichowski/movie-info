import path from 'path'
import glob from 'glob'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import TerserWebpackPlugin from 'terser-webpack-plugin'
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import PurgeCssPlugin from 'purgecss-webpack-plugin'

const publicPath = path.join(__dirname, 'public'),
  terserWebpackPlugin = new TerserWebpackPlugin({
    cache: true,
    parallel: true,
    sourceMap: true
  })

export default [
  {
    entry: {
      main: [
        './node_modules/bootstrap/dist/css/bootstrap.css',
        './src/css/main.css',
        'babel-polyfill',
        './src/js/index.js'
      ]
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
    plugins: [
      new MiniCssExtractPlugin({filename: 'css/[name].css'}),
      new PurgeCssPlugin({paths: glob.sync(`${publicPath}/**/*`, {nodir: true})})
    ],
    optimization: {
      minimizer: [
        terserWebpackPlugin,
        new OptimizeCssAssetsPlugin()
      ]
    },
    devServer: {
      contentBase: publicPath,
      compress: true,
      port: 3000
    }
  },
  {
    entry: {
      serviceWorker: './src/js/serviceWorker.js'
    },
    output: {
      path: publicPath,
      filename: '[name].js'
    },
    optimization: {
      minimizer: [terserWebpackPlugin]
    }
  }
]
