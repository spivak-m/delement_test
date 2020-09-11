const gulp = require('gulp')

const styles = require('./styles')
const pug2html = require('./pug2html')

const server = require('browser-sync').create()

module.exports = function serve(cb) {
    server.init({
        server: 'dist',
        notify: false,
        open: true,
        cors: true
    })

    gulp.watch('app/sass/**/*.sass', gulp.series(styles, cb =>
        gulp.src('dist/css').pipe(server.stream()).on('end', cb)))
    gulp.watch('app/pug/**/*.pug', gulp.series(pug2html))
    gulp.watch('dist/*.html').on('change', server.reload)

    return cb()
}
