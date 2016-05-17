'use strict';

var gulp = require('gulp');
var del = require('del');
var concat = require('gulp-concat');
var nodemon = require('gulp-nodemon');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var annotate = require('gulp-ng-annotate');


// gulp.task  - define a task
// gulp.src   - (source) input files
// gulp.dest  - output files
// gulp.watch - watch files/directories for changes
// *.pipe     - chain actions together


gulp.task('default', ['js', 'css', 'watch', 'serve']);

gulp.task('watch', ['watch.js', 'watch.css']);

gulp.task('serve', function() {
  nodemon({
    ignore: ['client', 'public', 'Gulpfile.js']
  });
});

/////// JAVASCRIPT /////////

gulp.task('js', function() {
  return gulp.src('./client/js/**/*.js')
    .pipe(concat('bundle.js'))
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(annotate())
    .pipe(uglify())
    .pipe(gulp.dest('./public/js'));
});

gulp.task('watch.js', function() {
  return gulp.watch('./client/js/**/*.js', ['js'])
});


/////// CSS /////////

gulp.task('css', ['clean.css'], function() {
  return gulp.src('./client/css/**/*.css')
    .pipe(gulp.dest('./public/css'));
});

gulp.task('watch.css', function() {
  return gulp.watch('./client/css/**/*.css', ['css'])
});

gulp.task('clean.css', function() {
  return del('./public/css');
});


