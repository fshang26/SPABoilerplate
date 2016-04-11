var gulp = require('gulp'),
    nodemon = require('gulp-nodemon')
    browserSync = require('browser-sync'),
    gutil = require('gulp-util'),
    less = require('gulp-less');

var isDev = false;

gulp.task('setEnv', function() {
    isDev = true;
    //gutil.log(gutil.colors.blue("set to dev environment"));
    gutil.log('set to dev environment');
});

gulp.task('nodemon', function(cb) {
  var called = false;
  return nodemon({
    script: 'server.js',
    //, env: { 'NODE_ENV': 'development' }
    tasks: ['watch']
  }).on('start', function() {
    if (!called) {
      called = true;
      cb();
    }
  });
});

gulp.task('browser-sync', ['nodemon'], function() {
  browserSync.init(null, {
    proxy: 'localhost:3030',
    port: 9999,
    open: 'false',
  });
});

gulp.task('less', function () {
  return gulp.src('public/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('public/css/')); // the last backslash is important!
});

gulp.task('watch', function() {
  gulp.watch('public/less/*.less', ['less']);  // Watch all the .less files, then run the less task
});

gulp.task('dev', ['setEnv', 'browser-sync'], function () {

})