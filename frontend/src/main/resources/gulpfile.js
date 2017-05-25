'use strict';

const
    gulp = require('gulp'),
    typings = require('gulp-typings'),
    ts = require('gulp-typescript'),
    eventStream = require('event-stream'),
    rimraf = require('rimraf'),
    less = require('gulp-less'),
    shell = require('gulp-shell'),
    connect = require('gulp-connect');

const dist = '../../../target/dist';

let watch = false;

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
        .pipe(ts('tsconfig-jit.json'))
        .on('error', fail)
        .js
        .pipe(gulp.dest(dist + '/js'))
});

gulp.task('copy-libs', () => {

    const copy = (src, dest) => gulp
        .src('node_modules/' + src)
        .pipe(gulp.dest(dist + '/lib/' + dest));

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

gulp.task('copy-html', (flow) =>
    gulp.src('src/index.html').pipe(gulp.dest(dist))
);

gulp.task('run-web-server', () =>
    connect.server({
        root: dist,
        livereload: true
    })
);

gulp.task('copy-emulator', () =>
    gulp.src('emulator/*.json').pipe(gulp.dest(dist + '/rest'))
);

gulp.task('default', [
    'process-less',
    'copy-libs',
    'copy-emulator',
    'process-ts',
    'copy-html'
]);

gulp.task('watch', ['run-web-server'], () => {
    watch = true;
    gulp.watch(['src/index.html'], ['copy-html']);
    gulp.watch(['src/less/*.less'], ['process-less']);
    gulp.watch(['src/ts/*.ts'], ['process-ts']);
    gulp.watch(['emulator/*.json'], ['copy-emulator'])
});

// Angular JIT compilation

gulp.task('clean-jit', () => {
    rimraf('build/jit', () => { });
});

gulp.task('copy-html-jit', ['clean-jit'], () =>
    gulp.src('src/html/index-jit.html').pipe(gulp.dest('build/jit'))
);

gulp.task('compile-jit', ['copy-html-jit'], shell.task(
    'node_modules/.bin/tsc -p tsconfig-jit.json'
));

gulp.task('copy-components-jit', ['compile-jit'], () =>
    gulp.src('src/ts/app/*.html').pipe(gulp.dest('build/jit'))
);

gulp.task('copy-system-js-jit', ['copy-components-jit'], () =>
    gulp.src('systemjs.config.js').pipe(gulp.dest('build/jit'))
);

gulp.task('copy-vendor-jit', ['copy-system-js-jit'], () => {
    gulp.src([
        'node_modules/core-js/client/shim.min.js',
        'node_modules/zone.js/dist/zone.js',
        'node_modules/systemjs/dist/system.src.js',
    ]).pipe(gulp.dest('build/jit/vendor'));
});

gulp.task('build-jit', ['copy-vendor-jit'], () => connect.server({
    root: ['build/jit', '.'],
    livereload: true
}));