const path = require('path');

const rules = {
  babel: require('./rules/babel'),
  html: require('./rules/html'),
  fonts: require('./rules/fonts'),
  images: require('./rules/images'),
  css: require('./rules/css'),
  sass: require('./rules/sass')
};

const plugins = {
  html: require('./plugins/html'),
  favicons: require('./plugins/favicons')
};

const config = {
  entry: path.resolve(__dirname, '../', './src/index.js'),

  output: {
    filename: 'javascripts/[name].[hash].js',
    chunkFilename: 'javascripts/[name].[hash].chunk.js',
    publicPath: '/'
  },

  mode: 'development',

  module: {
    rules: [
      rules.babel,
      rules.html,
      rules.fonts,
      rules.images,
      rules.css,
      rules.sass
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  devtool: 'source-map',

  plugins: [plugins.html, plugins.favicons],

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
    historyApiFallback: true,
    inline: true,
    watchOptions: {
      ignored: /node_modules/
    }
  }
};

module.exports = config;
