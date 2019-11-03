var gulp      = require('gulp'),
    sass      = require('gulp-sass'),
    clean     = require('gulp-clean'),
    htmlmin   = require('gulp-html-minifier'),
    cleanCSS  = require('gulp-clean-css');

var src       = './src/',
    dist      = './dist/';

// ############################################################
// MINIFY html
gulp.task('html',function(done){
  gulp.src(dist + '*.html',{force: true})
      .pipe(clean());
  gulp.src(src + '*.html')
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest(dist));
      done();
});
