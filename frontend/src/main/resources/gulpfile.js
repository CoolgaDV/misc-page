'use strict';

const
    gulp = require('gulp'),
    typings = require('gulp-typings'),
    ts = require('gulp-typescript'),
    eventStream = require('event-stream'),
    less = require('gulp-less'),
    pug = require('gulp-pug');

const dist = '../../../target/dist';

gulp.task('load-typings', () =>
    gulp.src('typings.json')
        .pipe(typings())
);

gulp.task('compile-ts', ['load-typings'], () =>
    gulp.src(['src/ts/*.ts', 'typings/index.d.ts'])
        .pipe(ts(ts.createProject('tsconfig.json')))
        .js
        .pipe(gulp.dest(dist + '/js'))
);

gulp.task('copy-libs', () => {

    const copy = (src, dest) => gulp.src('node_modules/' + src).pipe(gulp.dest(dist + '/lib/' + dest));

    return eventStream.merge(
        copy('jquery/dist/jquery.js',               'jquery'),
        copy('bootstrap/dist/js/bootstrap.js',      'bootstrap/js'),
        copy('bootstrap/dist/fonts/**',             'bootstrap/fonts'),
        copy('bootstrap/dist/css/bootstrap.css',    'bootstrap/css')
    );
});

gulp.task('process-less', function () {
    gulp.src('src/less/*.less')
        .pipe(less())
        .pipe(gulp.dest(dist + '/css'));
});

gulp.task('process-pug', () => {
    return gulp.src('src/pug/index.pug')
        .pipe(pug())
        .pipe(gulp.dest(dist))
});

gulp.task('default', ['process-less', 'copy-libs', 'compile-ts', 'process-pug']);

gulp.task('watch', () => {
    gulp.watch(['src/pug/index.pug', 'src/pug/include/*.pug'], ['process-pug']);
    gulp.watch(['src/less/*.less'], ['less']);
});