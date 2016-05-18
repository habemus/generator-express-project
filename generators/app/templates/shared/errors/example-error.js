// native
var util = require('util');

// simply echo the error message
function echo(arg) { return arg; }

const ERRORS = {
  ExampleErrorCode: echo,
};

function ExampleError(code, message) {
  if (!ERRORS[code]) {
    throw new TypeError('ExampleError not defined: ' + code);
  }

  this.code = code;

  var errorMessage = ERRORS[code];

  this.message = (typeof errorMessage === 'function') ? errorMessage(message) : errorMessage;

  Error.call(this);
};

util.inherits(ExampleError, Error);

ExampleError.prototype.name = 'ExampleError';

module.exports = ExampleError;