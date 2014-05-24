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
    },

    bootplate: function() {
        var files = this.expandFiles('**/*', {cwd: this.sourceRoot() + "/bootplate", dot: true});
        var ignores = [
            '.git',
            'LICENSE',
            'README.md'
        ];

        files.forEach(function(file) {
            if (ignores.indexOf(file) !== -1) {
                return;
            }

            this.copy("bootplate/" + file, file);
        }, this);
    },

    projectfiles: function () {
        this.copy('editorconfig', '.editorconfig');
        this.copy('bowerrc', '.bowerrc');
    }
});

module.exports = EnyoGenerator;
