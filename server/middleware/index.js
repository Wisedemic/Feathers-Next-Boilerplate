const nextMiddleware = require('./next-middleware');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.get('*', nextMiddleware());
};
