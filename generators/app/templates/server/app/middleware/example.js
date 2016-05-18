// exports a function that takes the app and some options and
// returns the middleware
module.exports = function (app, options) {

  // return the middleware function
  return function (req, res, next) {
    // do something
    next();
  };
};