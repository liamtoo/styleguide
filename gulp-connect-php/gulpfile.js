var gulp = require('gulp'),
    connect = require('gulp-connect-php');

gulp.task('connect', function() {
	gulp.src('./test/*.php')
    	connect.server();
});

gulp.task('php', function(){
  gulp.src('./*.php')
    .pipe(connect.reload());
});

gulp.task('watch', function(){
    gulp.watch(['./*.php'], ['php']);
});
