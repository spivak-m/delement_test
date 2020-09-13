const gulp = require('gulp')
const imageMin = require('gulp-imagemin')

module.exports = function imgMinify(cb) {
    return gulp.src('app/img/*')
        .pipe(imageMin())
        .pipe(gulp.dest('dist/img'))
}
