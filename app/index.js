'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');
var fs = require('fs');
var url = "http://enyojs.com/archive/bootplate-2.4.0.zip";



var EnyoGenerator = yeoman.generators.Base.extend({

    app: function () {
        var cb = this.async();

        this.log(yosay('Welcome to the marvelous Enyo JS generator!'));


        this.copy('_package.json', 'package.json');
        this.copy('_bower.json', 'bower.json');
        this.copy("_gruntfile.js", "Gruntfile.js");
        this.copy('editorconfig', '.editorconfig');
        this.copy('bowerrc', '.bowerrc');

        this.extract(url, ".", function() {
            this.log("Bootplate installed.");
            cb();
        }.bind(this));

        this.on('end', function () {
            if (!this.options['skip-install']) {
                this.installDependencies();
            }
        });

    }
});

module.exports = EnyoGenerator;
