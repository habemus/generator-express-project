// third-party
const bodyParser = require('body-parser');

module.exports = function (app, options) {
  app.get('/example', function (req, res, next) {

    var data = {
      name: 'João',
      age: 40,
      email: 'joao@joao.com',
    };

    res.json.item(data, {
      name: true,
      age: true
    });
  });

  app.post('/example', bodyParser.json(), function (req, res, next) {

    var data = {
      name: 'João',
      age: 40,
      email: 'joao@joao.com',
    };

    res.json.item(data, {
      name: true,
      age: true
    });
  });
};