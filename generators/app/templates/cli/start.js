// native dependencies
var path = require('path');
var http = require('http');

// internal dependencies
var pkg = require('../package.json');

// internal dependencies
var create<%= camelCaseName %> = require('../');

var options = {
  port: process.env.PORT,
  apiVersion: pkg.version,
  mongodbURI: process.env.MONGODB_URI
}

// instantiate the app
var app = create<%= camelCaseName %>(options);

// create http server and pass express app as callback
var server = http.createServer(app);

// start listening
server.listen(options.port, function () {
  console.log('<%= camelCaseName %> listening at port %s', options.port);
});