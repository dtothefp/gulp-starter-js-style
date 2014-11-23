var gulp = require('gulp');
var cache = require('gulp-cached');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var config = require('../config').js;

gulp.task('jshint', function() {
  return gulp.src(config.src)
    .pipe(cache('jshint'))
    .pipe(jscs())
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});
