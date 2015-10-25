import gulp from 'gulp'
import babel from 'gulp-babel'
import watch from 'gulp-watch'
import mocha from 'gulp-mocha'
import gutil from 'gulp-util'
import rimraf from 'rimraf'

const sourceFiles = [
  'src/index.js',
  'src/**/*.js',
  '!src/__tests__/test_helper.js',
  '!src/**/*_test.js'
]

const testFiles = [
  'src/__tests__/test_helper.js',
  'src/**/*_test.js'
]

gulp.task('release', ['mocha:ci'], (done) => {
  rimraf('lib/', () => {
    gulp.src(sourceFiles)
      .pipe(babel()).on('error', gutil.log)
      .pipe(gulp.dest('lib/'))

    done()
  })
})

gulp.task('mocha:ci', () => {
  gulp.src(testFiles, {read: false})
    .pipe(mocha({ui: 'bdd'}))
    .on('error', (err) => {
      console.log(err.stack)
      process.exit(1)
    })
})

gulp.task('mocha:dev', () => {
  gulp.src(testFiles, {read: false})
    .pipe(watch({emit: 'all'}, (files) => {
      files
        .pipe(mocha({ui: 'bdd'}))
        .on('error', function(err) {
          console.log(err.stack)
          this.emit('end')
        })
    }))
})
