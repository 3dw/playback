module.exports = {
  css: {
    loaderOptions: {
      sass: {
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/playback/'
    : '/'
}