# generator-enyo [![Build Status](https://secure.travis-ci.org/soapdog/generator-enyo.png?branch=master)](https://travis-ci.org/soapdog/generator-enyo)

> [Yeoman](http://yeoman.io) generator


## Getting Started

### What is EnyoJS

![EnyoJS Logo](http://i.imgur.com/70naxce.png)

[EnyoJS](http://www.enyojs.com) a framework for building native-quality HTML5 apps that run everywhere!

Check out [the documentation](http://enyojs.com/docs) for more information. Browse [the sampler demo](http://enyojs.com/sampler)
for a glance of what is possible and take a look and the [community gallery](http://enyojs.com/gallery) for reusable components

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```bash
$ npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-enyo from npm, run:

```bash
$ npm install -g generator-enyo
```

Finally, initiate the generator inside your empty project directory:

```bash
$ mkdir my-cool-project
$ cd my-cool-project
$ yo enyo
```

### Adding libraries

You can use **bower** to add libraries to your project. They will be added to the **lib** folder.

```bash
$ bower install webOS-ports/webos-lib
```

Remember to add the lib to your **package.js**

### Running a local server

The gruntfile comes with the connect task already set up. You can use it to launch a local server pointed at the deploy
folder or pointed to root folder.

```bash
$ grunt connect:debug
```

or

```bash
$ grunt connect:deploy
```

This makes testing your Enyo project much easier.

### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).


## License

MIT
