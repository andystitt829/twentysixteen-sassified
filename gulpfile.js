var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');

gulp.task('sass', function(){
  return gulp.src('scss/style.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest(''))
});
gulp.task('minify-css', function() {
  return gulp.src('style.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('production'));
});

gulp.task('default', function() {
  gulp.run (
	  'sass',
	  'minify-css'
  );
});