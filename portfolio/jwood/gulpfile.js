'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var server = require('browser-sync');

gulp.task('style', function() {
    gulp.src('sass/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
        .pipe(server.reload({
            stream: true
        }))
});

gulp.task('server', ['style'], function() {
    server.init({
        server: ".",
        notify: false,
        open: true,
        ui: false
    });
    gulp.watch('sass/style.scss', ['style'], server.reload);
    gulp.watch('*.html', server.reload);
    gulp.watch('js/*.js', server.reload);
});


