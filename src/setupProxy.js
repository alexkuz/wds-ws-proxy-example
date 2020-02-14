const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy('/ws-proxy', {
      secure: false,
      changeOrigin: true,
      alterProxyOptions: true,
      target: 'http://localhost:7777',
      pathRewrite: {
        '^/ws-proxy': '/'
      },
      ws: true
    })
  );
};
