var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');

gulp.task('dev', function () {
  nodemon({
    script: 'server.js'
    //, env: { 'NODE_ENV': 'development' }
  })
})