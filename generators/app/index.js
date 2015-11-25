'use strict';
var path = require('path');
var util = require('util');

var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _     = require('lodash');
var camelCase = require('camel-case')

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the exceptional ' + chalk.red('ExpressProject') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'The name of your project',
      default: path.basename(process.cwd()),
    }];

    this.prompt(prompts, function (options) {
      this.options = options;

      // set camelCase version
      var _name = camelCase(options.name);
      this.options.camelCaseName = _name.charAt(0).toUpperCase() + _name.slice(1);

      done();
    }.bind(this));
  },

  writing: {
    app: function () {

      var name = this.options.name;

      var files = {
        'package.json': 'package.json',
        'cli/start.js': 'cli/start.js',
        'client/index.js': 'client/index.js',
        'demo/demo.js': 'demo/demo.js',
        'demo/index.html': 'demo/index.html',
        'demo/styles.css': 'demo/styles.css',
        'tasks/client/build.js': 'tasks/client/build.js',
        'tasks/client/develop.js': 'tasks/client/develop.js',
        'index.js': 'index.js',
      };

      _.each(files, function (dest, src) {
        this.fs.copyTpl(
          this.templatePath(src),
          this.destinationPath(dest),
        this.options);
      }.bind(this));
    },

    projectfiles: function () {

      var files = {
        'gulpfile.js': 'gulpfile.js',
        '_gitignore': '.gitignore',
        'README.md': 'README.md'
      };

      _.each(files, function (dest, src) {
        this.fs.copy(this.templatePath(src), this.destinationPath(dest), this.options);
      }.bind(this));
    }
  },

  install: function () {
    this.installDependencies({
      bower: false,
      npm: true
    });
  }
});
