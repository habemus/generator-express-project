// third-party
var mongoose = require('mongoose');

// constants
const Schema = mongoose.Schema;

var exampleSchema = new Schema({

});

// takes the connection and options and returns the model
module.exports = function (conn, options) {

  var Example = conn.model('Example', exampleSchema);
  
  return Example;
};