var gulp = require('gulp');
var liteServer = require('gulp-live-server');
var browserSync = require('browser-sync');

gulp.task('lite-server', function(){
    var server = new liteServer('server/main.js');
    server.start();
});

gulp.task('serve', ['lite-server'], function(){
    browserSync.init(null, {
        proxy: 'http://localhost:7777',
        port: 9001
    })
});