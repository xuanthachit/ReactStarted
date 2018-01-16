var gulp = require('gulp');
var liteServer = require('gulp-live-server');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var reactify = require('reactify');

gulp.task('lite-server', function(){
    var server = new liteServer('server/main.js');
    server.start();
});

gulp.task('bundle', function(){
    return browserify({
        entries: 'app/main.jsx',
        debug: true
    })
    .transform(reactify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./.tmp'));
})


// When run gulp serve react will run buble and lite-server
gulp.task('serve', ['bundle', 'lite-server'], function(){
    browserSync.init(null, {
        proxy: 'http://localhost:7777',
        port: 9001
    })
});