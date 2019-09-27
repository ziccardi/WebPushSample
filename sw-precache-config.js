module.exports = {
  swDest: './build/sw.js',
  globDirectory: '/',
  globPatterns: [
    'build/static/css/**.css',
    'build/static/js/**.js'
  ],
  swFilePath: './build/service-worker.js',
  templateFilePath: './service-worker.tmpl',
  stripPrefix: 'build/',
  handleFetch: false,
  runtimeCaching: [{
    urlPattern: /this\\.is\\.a\\.regex/,
    handler: 'StaleWhileRevalidate'
  }]
}