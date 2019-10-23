// Uncaught (in promise) Error: Module parse failed:
// Unexpected character '：' (5:2)
// You may need an appropriate loader to handle this
// file type, currently no loaders are configured to
// process this file. See https://webpack.js.org/concepts#loaders

module.exports = {
  //...
  chainWebpack: config => {
    config.module
      .rule("raw")
      .test(/\.txt$/)
      .use("raw-loader")
      .loader("raw-loader")
      .end();
  }
};
