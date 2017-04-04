var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('./src/styles/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/styles/**/*.sass', ['sass']);
});

gulp.task('html', function() {
  return gulp.src('src/index.html')
  .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['sass', 'html'], function() {
  console.log("Compiling sass and passing htmls")
})