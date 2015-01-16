var gulp = require('gulp'),
    connect = require('gulp-connect-php');

gulp.task('connect', function() {
    connect.server();
});

var php = require('../paths').php;
