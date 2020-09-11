const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const sourcemaps = require('gulp-sourcemaps')
// const shorthand = require('gulp-shorthand') // сокращает стили
// const minify = require('gulp-clean-css')
// const rename = require('gulp-rename')

module.exports = function styles() {
    return gulp.src('app/sass/styles.sass')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .on('error', sass.logError)
        // .pipe(shorthand())
        .pipe(autoprefixer())
        // .pipe(minify())
        .pipe(sourcemaps.write())
        // .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/css'))
}
