// native dependencies
var http    = require('http');

// external dependencies
var express = require('express');
var morgan  = require('morgan');
var cors    = require('cors');

/**
 * Function that starts the host server
 */
function create<%= camelCaseName %>(options) {

  // create express app instance
  var app = express();

  // logging
  app.use(morgan('dev'));

  app.use(cors());

  // define description route
  app.get('/who', function (req, res) {
    res.json({
      name: '<%= name %>'
    });
  });

  return app;
}

module.exports = create<%= camelCaseName %>;