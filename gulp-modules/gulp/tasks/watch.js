var gulp = require('gulp');
// var $ = {
//   livereload: require('gulp-livereload'),
// };

var paths = require('../paths');

// Files to always watch.
function alwaysWatch() {

  // Watch .scss files
  gulp.watch(paths.styles.watch, ['styles']);

  // Watch .css files to copy into `sass` as .scss files
  gulp.watch(paths.cssToSass.src, ['cssToSass']);

  // Watch Gulp files
  gulp.watch(paths.jshint.gulp, ['jshint-gulp']);

  // Start Browserify
  gulp.start('browserify');

  // Watch image files
  gulp.watch(paths.images.src, ['images']);

  // Create LiveReload server
  // $.livereload.listen();

  // Watch any files in `build`, reload on change
  // gulp.watch([
  //   'build/**',
  //   './**/*.php'
  // ]).on('change', $.livereload.changed);
}

gulp.task('setWatch', function() {
  global.isWatching = true;
});

// Watch Development
gulp.task('watch', ['setWatch'], function() {
  alwaysWatch();

  // Lint .js files
  gulp.watch(paths.scripts.src, ['jshint']);
});

// Watch Production Build
gulp.task('watch-prod', ['setWatch'], function() {
  alwaysWatch();

  // Lint and build .js files
  gulp.watch(paths.scripts.src, ['scripts', 'bundles']);
});
