'use strict';

const
    gulp = require('gulp'),
    typings = require('gulp-typings'),
    ts = require('gulp-typescript'),
    eventStream = require('event-stream'),
    less = require('gulp-less'),
    pug = require('gulp-pug');

const dist = '../../../target/dist';

var watch = false;

const handleError = (flow) => (error) => {
    if (watch) {
        console.log(error.toString());
        flow();
    } else {
        flow(error);
    }
};

gulp.task('load-typings', () => {
    const stream = gulp.src('typings.json');
    return watch ? stream : stream.pipe(typings());
});

gulp.task('process-ts', ['load-typings'], () => {

    const fail = () => {
        if (!watch) {
            process.exit(1)
        }
    };

    gulp.src(['src/ts/*.ts', 'typings/index.d.ts'])
        .pipe(ts(ts.createProject('tsconfig.json')))
        .on('error', fail)
        .js
        .pipe(gulp.dest(dist + '/js'))
});

gulp.task('copy-libs', () => {

    const copy = (src, dest) => gulp.src('node_modules/' + src).pipe(gulp.dest(dist + '/lib/' + dest));

    eventStream.merge(
        copy('jquery/dist/jquery.js',               'jquery'),
        copy('bootstrap/dist/js/bootstrap.js',      'bootstrap/js'),
        copy('bootstrap/dist/fonts/**',             'bootstrap/fonts'),
        copy('bootstrap/dist/css/bootstrap.css',    'bootstrap/css')
    );
});

gulp.task('process-less', (flow) =>
    gulp.src('src/less/*.less')
        .pipe(less())
        .on('error', handleError(flow))
        .pipe(gulp.dest(dist + '/css'))
);

gulp.task('process-pug', (flow) =>
    gulp.src('src/pug/index.pug')
        .pipe(pug())
        .on('error', handleError(flow))
        .pipe(gulp.dest(dist))
);

gulp.task('default', ['process-less', 'copy-libs', 'process-ts', 'process-pug']);

gulp.task('watch', () => {
    watch = true;
    gulp.watch(['src/pug/**/*.pug'], ['process-pug']);
    gulp.watch(['src/less/*.less'], ['process-less']);
    gulp.watch(['src/ts/*.ts'], ['process-ts']);
});