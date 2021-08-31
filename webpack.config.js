module.exports = {
  entry: "./example/app.js",
  output: {
    path: "./build",
    filename: "bundle.js",
    publicPath: "/build/",
  },
  devServer: {
    host: "0.0.0.0",
    contentBase: "./example",
    historyApiFallback: true,
    stats: {
      // do not show list of hundreds of files included in a bundle
      chunkModules: false,
    },
  },
};
