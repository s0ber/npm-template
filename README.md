My Node Package
=====
[![Build Status](https://travis-ci.org/s0ber/npm-template.png?branch=master)](https://travis-ci.org/s0ber/npm-template)

## Usage

### Basic preparation

Clone this repo, rename it, remove git files. Install **gulp** and **coffeegulp** to easily run gulp tasks defined within ```gulp.coffee```.

```
cd ~/my_projects
git clone git@github.com:s0ber/npm-template.git my_awesome_package
cd my_awesome_package
rm -rf .git

npm install -g gulp
npm install -g coffeegulp
npm install
```

Edit ```package.json``` with required data.

### Testing

Run specs in development mode (all file changes will be watched).

```
coffeegulp mocha:dev
```

You can also sync your TravisCI account and turn on builds for your repo.

### Releasing

If you want to release and publish a new version of your package, at first, edit ```package.json```.
Then you can publish your package with ```npm publish``` command. But before publishing it'll run *prepuplish* script.
It will at first run your specs. If they'll pass, compiled versions of your source files will be created in **lib/** folder.
And then publishing process will start.

### Source files

You should list your source files in ```gulpfile.coffee```, gulp will use them for building compiled versions, and mocha will use them for running specs.

### License

Don't forget to edit LICENSE file before the release.
