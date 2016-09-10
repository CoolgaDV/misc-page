'use strict';

const
    gulp = require('gulp'),
    typings = require('gulp-typings'),
    ts = require('gulp-typescript'),
    eventStream = require('event-stream');

const dist = '../../../target/dist';

gulp.task('typings', () =>
    gulp.src('typings.json')
        .pipe(typings())
);

gulp.task('ts', ['typings'], () =>
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

gulp.task('copy-src', () =>
    gulp.src(['src/*', '!src/ts'])
        .pipe(gulp.dest(dist))
);

gulp.task('watch', () => {
    gulp.watch(['src/*.html'], ['copy-src']);
});

gulp.task('default', ['copy-src', 'ts', 'copy-libs']);