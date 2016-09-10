'use strict';

const
    gulp = require('gulp'),
    typings = require('gulp-typings'),
    ts = require('gulp-typescript'),
    eventStream = require('event-stream'),
    less = require('gulp-less'),
    inject = require('gulp-inject');

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

gulp.task('copy-html', () =>
    gulp.src('src/index.html')
        .pipe(gulp.dest(dist))
);

gulp.task('process-less', function () {
    gulp.src('src/less/*.less')
        .pipe(less())
        .pipe(gulp.dest(dist + '/css'));
});

gulp.task('inject-html', ['copy-html', 'process-less', 'copy-libs', 'compile-ts'], () => {

    var sources = gulp.src([
        dist + '/lib/bootstrap/css/bootstrap.css',
        dist + '/css/main.css',
        dist + '/lib/jquery/jquery.js',
        dist + '/lib/bootstrap/js/bootstrap.js',
        dist + '/js/index.js',
    ], {read: false});

    return gulp.src(dist + '/index.html')
        .pipe(inject(sources, {relative: true}))
        .pipe(gulp.dest(dist));
});

gulp.task('default', ['inject-html']);

gulp.task('watch', () => {
    gulp.watch(['src/*.html'], ['copy-html']);
    gulp.watch(['src/less/*.less'], ['less']);
});
