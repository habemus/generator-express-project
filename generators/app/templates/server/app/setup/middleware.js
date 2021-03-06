// third-party dependencies
const cors        = require('cors');
const jsonMessage = require('json-message');

module.exports = function (app, options) {

  ////
  // CORS
  var corsWhitelist = options.corsWhitelist || [];
  corsWhitelist = (typeof corsWhitelist === 'string') ?
    corsWhitelist.split(',') : corsWhitelist;

  app.log.info('cors whitelist', corsWhitelist);

  var _corsMiddleware = cors({
    origin: function (origin, cb) {
      var originIsWhitelisted = (corsWhitelist.indexOf(origin) !== -1);

      if (!originIsWhitelisted) {
        app.log.warn('request from not-whitelisted origin %s', origin, corsWhitelist);
      }

      cb(null, originIsWhitelisted);
    }
  });

  app.options('*', _corsMiddleware);
  app.use(_corsMiddleware);


  ////
  // JSON MESSAGE
  var jsonM = jsonMessage(options.apiVersion);

  // global middleware
  // IN STUDY:
  app.use(function (req, res, next) {

    // define response methods
    res.json.item = function (sourceData, projection) {
      var msg = jsonM.response.item();

      msg.load(sourceData, projection);

      res.json(msg);
    };

    res.json.list = function (sourceData, projection) {
      var msg = jsonM.response.list();

      msg.loag(sourceData, projection);
      res.json(msg);
    };

    next();

  });

};