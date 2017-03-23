var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var connect = require('gulp-connect');
var babel = require("gulp-babel");

gulp.task("babel", function () {
  return gulp.src("src/app.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});

gulp.task('sass', function () {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass())
        .pipe(cleanCSS({keepSpecialComments : 0}))
        .pipe(gulp.dest('src/css'))
});

gulp.task('watch', function (){
    gulp.watch('src/scss/**/*.scss', ['sass'], ['minify-css']);
});

gulp.task('webserver', function() {
	connect.server();
});

gulp.task('default', ['watch', 'webserver', 'babel']);
