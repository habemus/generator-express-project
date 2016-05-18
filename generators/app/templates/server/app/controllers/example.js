// dependencies

module.exports = function (app, options) {
  
  var sampleCtrl = {};

  sampleCtrl.doSomething = function () {
    console.log('doSomething');
  };

  return sampleCtrl;
};