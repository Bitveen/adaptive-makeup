var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('./sass/style.scss')
    .pipe(sass({ outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('./style'));
});

gulp.task('sass:watch', function() {
    gulp.watch('./sass/style.scss', ['sass']);
});