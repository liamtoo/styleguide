var gulp = require('gulp');
var $ = {
  uglify: require('gulp-uglify'),
  cached: require('gulp-cached'),
};

var scripts = require('../paths').scripts;

// Minify all JavaScript files and put into `build` folder.
// Run Browserify first to build source versions,
// then minify with this task.
gulp.task('scripts', ['jshint', 'browserify'], function() {
  return gulp.src(scripts.src)
    .pipe($.cached('scripts'))
    .pipe($.uglify())
    .pipe(gulp.dest(scripts.dest));
});
