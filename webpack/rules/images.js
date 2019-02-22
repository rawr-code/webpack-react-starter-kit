module.exports = {
  test: /\.(jpe?g|png|gif|ico|svg|webp)$/i,
  use: [
    {
      loader: 'file-loader',
      options: {
        // publicPath: '../',
        outputPath: 'assets',
        name: 'images/[name]-[hash].[ext]'
      }
    },
    {
      loader: 'image-webpack-loader',
      options: {
        bypassOnDebug: true
      }
    }
  ]
};
