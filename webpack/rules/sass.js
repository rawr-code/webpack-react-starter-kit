const loaders = {
  css: require('../loaders/css'),
  postcss: require('../loaders/postcss'),
  sass: require('../loaders/sass')
};

module.exports = {
  test: /\.(scss|sass)$/i,
  use: [{ loader: 'style-loader' }, loaders.css, loaders.postcss, loaders.sass]
};
