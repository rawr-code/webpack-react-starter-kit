const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

const HtmlPlugin = new HtmlWebpackPlugin({
  template: "./public/index.html",
  filename: "index.html"
});

const FaviconsPlugin = new FaviconsWebpackPlugin({
  logo: "./public/favicon.png",
  prefix: "icons-[hash]/",
  emitStats: false,
  statsFilename: "iconstats-[hash].json",
  persistentCache: true,
  inject: true,
  background: "#fff",
  title: "Webpack App",
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

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [FaviconsPlugin, HtmlPlugin],
  devServer: {
    contentBase: "./dist",
    compress: true,
    port: 3000,
    historyApiFallback: true,
    publicPath: "/"
  }
};
