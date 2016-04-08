var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    less = require('gulp-less');

gulp.task('less', function () {
  return gulp.src('public/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('public/css/')); // the last backslash is important!
});

gulp.task('watch', function() {
  gulp.watch('public/less/*.less', ['less']);  // Watch all the .less files, then run the less task
});

gulp.task('dev', function () {
  nodemon({
    script: 'server.js',
    //, env: { 'NODE_ENV': 'development' }
    tasks: ['watch']
  })
})