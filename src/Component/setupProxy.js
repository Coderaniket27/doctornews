const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',  // The route you want to proxy
    createProxyMiddleware({
      target: 'http://localhost:3001',  // The URL of the server hosting the resource
      changeOrigin: true,
    })
  );
};