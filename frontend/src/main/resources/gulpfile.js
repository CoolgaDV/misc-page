const gulp = require('gulp');

gulp.task('copy-js-lib', function() {
    gulp.src(['node_modules/jquery/dist/jquery.js'])
        .pipe(gulp.dest('dist/js/lib'));
});

gulp.task('copy-src', function() {
    gulp.src('src/*')
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['copy-src', 'copy-js-lib']);