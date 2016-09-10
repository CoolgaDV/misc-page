const gulp = require('gulp');
const typings = require('gulp-typings');
const del = require('del');
const ts = require('gulp-typescript');

gulp.task('clean', function(cb) {
    del.sync('dist');
    cb();
});

gulp.task('typings', function() {
    return gulp.src('typings.json')
        .pipe(typings());
});

gulp.task('ts', ['typings', 'clean'], function() {
    return gulp.src(['src/ts/*.ts', 'typings/index.d.ts'])
        .pipe(ts(ts.createProject('tsconfig.json')))
        .js
        .pipe(gulp.dest('dist/js'));
});

gulp.task('copy-js-lib', ['clean'], function() {
    return gulp.src(['node_modules/jquery/dist/jquery.js'])
        .pipe(gulp.dest('dist/js/lib'));
});

gulp.task('copy-src', ['clean'], function() {
    return gulp.src(['src/*', '!src/ts'])
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['copy-src', 'ts', 'copy-js-lib']);