const gulp = require('gulp');
const typings = require('gulp-typings');
const ts = require('gulp-typescript');

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

gulp.task('copy-js-lib', () =>
    gulp.src(['node_modules/jquery/dist/jquery.js'])
        .pipe(gulp.dest(dist + '/js/lib'))
);

gulp.task('copy-src', () =>
    gulp.src(['src/*', '!src/ts'])
        .pipe(gulp.dest(dist))
);

gulp.task('default', ['copy-src', 'ts', 'copy-js-lib']);