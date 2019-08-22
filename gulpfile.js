var gulp = require('gulp')
var connect = require('gulp-connect')

gulp.task('server', function () {
    connect.server({
        livereload: true,
        port:2333
    })
})
gulp.task('dev',gulp.parallel('server'))