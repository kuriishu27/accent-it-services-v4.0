const gulp = require('gulp'),
      concat = require('gulp-concat'),
      uglify = require('gulp-uglify'),
      sass = require('gulp-sass'),
      cssmin = require('gulp-cssmin'),
      rename = require('gulp-rename'),
      browserSync = require('browser-sync');
      
var reload = browserSync.reload

gulp.task('styles', function(){
  return gulp.src('css/**/*.css')
    .pipe(concat('styles.css'))
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('scripts', function(){
    return gulp.src('js/*.js')
      .pipe(concat('scripts.js'))
      .pipe(cssmin())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('dist/js'));
});

gulp.task('browser-sync', ['styles'], function() {
    
        browserSync.init({
            server: "./"
        });
    
        gulp.watch("css/**/*.css", ['styles']);
        gulp.watch("js/**/*.js", ['scripts']);
        gulp.watch("*.html").on('change', browserSync.reload);
});


gulp.task('default', [ 'browser-sync' ]);