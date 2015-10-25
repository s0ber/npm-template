My Node Package
=====
[![Build Status](https://travis-ci.org/s0ber/npm-template.png?branch=master)](https://travis-ci.org/s0ber/npm-template)

## Usage

### Basic preparation

Clone this repo, rename it, remove git files. Install **gulp** to run gulp tasks.

```
cd ~/my_projects
git clone git@github.com:s0ber/npm-template.git my_awesome_package
cd my_awesome_package
rm -rf .git

npm install -g gulp
npm install
```

Edit ```package.json``` with required data.

### Testing

Run tests in development mode (all file changes will be watched).

```
gulp mocha:dev
```

You can also sync your TravisCI account and turn on builds for your repo.

### Releasing

If you want to release and publish a new version of your package, at first, edit ```package.json```.
Then run ```gulp release``` task.  It will at first run your tests. If they'll pass,
compiled versions of your source files will be created in **lib/** folder.
After that you can start publishing process by calling `npm publish`.

### Source files

You should list your source files in ```gulpfile.babel.js```, gulp will use them for building compiled versions, and mocha will use them for running tests.

### License

Don't forget to edit LICENSE file before the release.
