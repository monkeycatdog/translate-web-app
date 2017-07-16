var gulp = require('gulp');
var server = require('gulp-server-livereload');
var sass = require('gulp-sass');
var prefixer = require('gulp-autoprefixer');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var gutil = require('gulp-util');

 
gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(server({
      livereload: true,
      directoryListing: false,
      open: false
    }));
});

gulp.task('sass', function () {
  return gulp.src('app/src/styles/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(prefixer())
    .pipe(gulp.dest('app/dist/css/'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('app/src/styles/*.scss', ['sass']);
});

gulp.task('scripts', function() {
  return gulp.src('app/src/root.js')
    .pipe(browserify({
        insertGlobals: false,
        debug: true
    }))
    .on('error', gutil.log)
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('app/dist/js/'));
});

gulp.task('js:watch', function () {
  gulp.watch('app/src/**/*.js', ['scripts']);
});

gulp.task('default', ['sass', 'scripts']);

gulp.task('dev',['scripts','sass','sass:watch','js:watch', 'webserver']);