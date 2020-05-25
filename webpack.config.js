const path = require('path')
module.exports = {
  entry: {
    entry: './src/entry.js',
    entry2: './src/entryTwo.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {

  },
  plugins: [

  ],
  devServer: {

  }
}
