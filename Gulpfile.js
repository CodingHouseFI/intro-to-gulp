'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat')

// gulp.task  - define a task
// gulp.src   - (source) input files
// gulp.dest  - output files
// gulp.watch - watch files/directories for changes
// *.pipe     - chain actions together


gulp.task('default', ['js']);


gulp.task('watch', function() {

  return gulp.watch('./public/js/*.js', ['js'])

});


gulp.task('js', function() {

  return gulp.src('./public/js/*.js')
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./public/'));

})


