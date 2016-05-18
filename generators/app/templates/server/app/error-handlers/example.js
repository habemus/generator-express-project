module.exports = function (app, options) {

  app.use(function (err, req, res, next) {
    if (err.name === 'ExampleError') {

    } else {
      next(err);
    }
  });
};