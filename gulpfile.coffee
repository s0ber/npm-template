gulp = require('gulp')
grep = require('gulp-grep-stream')
watch = require('gulp-watch')
mocha = require('gulp-mocha')

gulp.task 'tests', ->
  gulp.src(['spec/spec_helper.coffee', 'spec/**/*.coffee'], read: false)
    .pipe(watch((files) ->
      files.pipe(mocha(ui: 'bdd'))
    ))

