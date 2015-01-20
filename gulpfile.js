'use strict';

var 	gulp 			    = require('gulp'),
	    sass 			    = require('gulp-ruby-sass'),
	    // autoprefixer 	= require('gulp-autoprefixer'),
	    sassdoc			  = require('gulp-sassdoc'),
  	  hologram      = require('gulp-hologram'),
      concat        = require('gulp-concat'),
      kss           = require('gulp-kss');

gulp.task('default', function() {
	return gulp.src('sass/style.scss')
    		.pipe(sass({
    			style: 'expanded',
          sourcemap: false,
    			precision: 1,
        	lineNumbers : true
    	}))
    	// .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    	.pipe(gulp.dest('build/'))
});

gulp.task('watch', function() {
	gulp.watch('**/*.scss', ['default']);
});

/**
*
* Default sassDoc task
* Config options - http://sassdoc.com/gulp/
* API - http://sassdoc.com/annotations/
*
**/

gulp.task('sassdoc', function () {
  return gulp
    .src('sass/tools')
    .pipe(sassdoc({
        'dest': 'build/sassdoc',
        'verbose': true,
        'groups': {
          undefined: "undefined",
        },
    'display': {
      'access': ['public', 'private'],
      'alias': true
    },
        'basePath': 'https://github.com/Skoks/styleguide'
    }));
});

/**
*
* Default hologram task
* https://github.com/rejahrehim/gulp-hologram
*
**/

gulp.task('hologram', function() {
  gulp.src('./hologram/config.yml')
    .pipe(hologram());
});


/**
*
* Default gulp-kss task
* https://github.com/PhilJ/gulp-kss
*
**/

gulp.task('kss', function () {
  gulp.src(['sass/components-kss/**/*.scss'])
    .pipe(kss({
        overview: 'sass/components-kss/index.md',
        // templateDirectory: 'kss-templates'
    }))
    .pipe(gulp.dest('build/styleguide-kss/'));

  gulp.src('sass/style.scss')
    .pipe(sass())
    .pipe(concat('public/style.css'))
    .pipe(gulp.dest('build/styleguide-kss'));
});
