var gulp = require('gulp');
var path = require('path');
var handleErrors = require('../util/handleErrors');
var $ = {
  notify: require('gulp-notify'),
};

var browserify = require('browserify');
var watchify = require('watchify');
var transform = require('vinyl-transform');
var source = require('vinyl-source-stream');

var paths = require('../paths').browserify;

gulp.task('browserify', function () {
  var browserified = transform(function(filename) {
    var options = {
      entries: filename,
      extensions: ['hbs'],
      debug: true, // source maps

      // watchify args
      fullPaths: false, // do not show full paths
      cache: {},
      packageCache: {},
    };

    var b = browserify(options);

    if (global.isWatching) {
      b = watchify(b);
      b.on('update', function(filename) {
        var basename = path.basename(filename);
        return b.bundle()
          .on('error', handleErrors)
          .pipe(source(basename))
          .pipe($.notify('Browserify update: ' + basename))
          .pipe(gulp.dest(paths.dest));
      });
    }

    return b.bundle();
  });

  return gulp.src(paths.src)
    .pipe(browserified)
    .on('error', handleErrors)
    .pipe(gulp.dest(paths.dest));
});
