// native dependencies
const http    = require('http');

// external dependencies
const express  = require('express');
const cors     = require('cors');
const mongoose = require('mongoose');

// own dependencies
const ExampleError = require('../shared/errors/example-error')

/**
 * Function that starts the host server
 */
function create<%= camelCaseName %>(options) {

  if (!options.port) { throw new Error('port is required'); }
  if (!options.apiVersion) { throw new Error('apiVersion is required'); }
  if (!options.mongodbURI) { throw new Error('mongodbURI is required'); }

  // create express app instance
  var app = express();

  // make the error constructor available throughout the application
  app.Error = ExampleError;

  // logging
  require('./app/setup/logger')(app, options);

  // create a mongoose mongo db connection
  var conn = mongoose.createConnection(options.mongodbURI);

  // services
  app.services = {};

  // load models
  app.models = {};
  app.models.Example = require('./app/models/example')(conn, options);

  // instantiate controllers
  app.controllers = {};
  app.controllers.example = require('./app/controllers/example')(app, options);

  // instantiate middleware for usage in routes
  app.middleware = {};
  app.middleware.example = require('./app/middleware/example')(app, options);

  // setup global middleware
  require('./app/setup/middleware')(app, options);
  
  // define description route
  app.get('/who', function (req, res) {
    res.json.item({
      name: '<%= name %>'
    }, { name: true });
  });

  // load routes
  require('./app/routes/example')(app, options);

  // load error-handlers
  require('./app/error-handlers/example')(app, options);

  return app;
}

module.exports = create<%= camelCaseName %>;