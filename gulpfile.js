const gulp = require('gulp')

const server = require('./gulp/tasks/server')
// const styles = require('./gulp/tasks/styles')

module.exports.default = gulp.series(server)
