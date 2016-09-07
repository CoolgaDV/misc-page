const gulp = require('gulp');

gulp.task('copy', function() {
    gulp.src('src/*')
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['copy']);