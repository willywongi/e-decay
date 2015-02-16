'use strict';

var path = require('path'),
	gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    http = require('http'),
    st = require('st'),
    babel = require("gulp-babel");

gulp.task('default', ['build', 'server', 'watch']);

gulp.task('build', function() {
	gulp.src("src/index.html").pipe(gulp.dest("dist"));
	return gulp.src("src/app.js")
		.pipe(babel())
		.pipe(gulp.dest("dist"));
});

gulp.task('watch', function() {
  livereload.listen({
	  port: 35730
  });
  gulp.watch('src/*', ['build', function() {
	  livereload();
  }]);
});

gulp.task('server', function(done) {
  http.createServer(
    st({ path: __dirname + '/dist', index: 'index.html', cache: false })
  ).listen(8080, done);
});


