'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');
var fs = require('fs');


var EnyoGenerator = yeoman.generators.Base.extend({
    init: function () {
        this.pkg = require('../package.json');

        this.on('end', function () {
            if (!this.options['skip-install']) {
                this.installDependencies();
            }
        });
    },

    app: function () {
        this.log(yosay('Welcome to the marvelous Enyo generator!'));


        this.copy('_package.json', 'package.json');
        this.copy('_bower.json', 'bower.json');
        this.copy("_gruntfile.js", "Gruntfile.js");
        this.copy('editorconfig', '.editorconfig');
        this.copy('bowerrc', '.bowerrc');

    },

    bootplate: function() {
        this.directory('bootplate','.');

    }
});

module.exports = EnyoGenerator;
