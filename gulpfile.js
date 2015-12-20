var gulp = require('gulp');
var watch = require('gulp-watch');
var less = require('gulp-less');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');

gulp.task('default', ['watch'], function () {
});

gulp.task('less', function () {
    return gulp.src('assets/less/**/*.less')
        .pipe(less())
        .pipe(dest('assets/css/'));
});

gulp.task('watch', function () {
    gulp.watch('assets/less/**/*.less', ['less']);
});