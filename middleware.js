const middleware = function (req, res, next) {
  console.log("calling middleware", req.originalUrl);
  next()
};

module.exports = middleware;
