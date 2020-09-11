const gulp = require('gulp')
const pug = require('gulp-pug')

module.exports = function pug2html(cb) {
    return gulp.src('app/pug/*.pug')
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest('dist'))
}
