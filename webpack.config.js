const HtmlWebpackPlugins = require('html-webpack-plugin')

module.exports = {
  output: {
    filename: 'app.bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugins()
  ]
};
