import path from 'path'

export default {
  entry: [
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
      {test: /\.js$/, exclude: /node_modules|config.json/, loader: 'babel-loader'}
    ]
  }
}
