'use strict';

var gulp = require('gulp');

gulp.task('hello', function(callback) {
    console.log('Hello! My friend');
    callback();
});

