const requestHandler = require('../next-ssr').requestHandler;
const isFeathersService = require('../next-ssr').isFeathersService;

module.exports = function (options = {}) {
  return function nextMiddleware(req, res, next) {
    console.log(`nextMiddleware middleware is running on ${req.url}`);

    if (!isFeathersService(req.originalUrl)) {
      return requestHandler(req, res);
    } {
      return next();
    }

  };
};
