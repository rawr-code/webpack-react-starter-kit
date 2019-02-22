const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = new FaviconsWebpackPlugin({
  logo: './public/favicon.png',
  prefix: 'icons-[hash]/',
  emitStats: false,
  statsFilename: 'iconstats-[hash].json',
  persistentCache: true,
  inject: true,
  background: '#fff',
  title: 'Webpack App',
  icons: {
    android: true,
    appleIcon: true,
    appleStartup: true,
    coast: false,
    favicons: true,
    firefox: true,
    opengraph: true,
    twitter: true,
    yandex: true,
    windows: true
  }
});
