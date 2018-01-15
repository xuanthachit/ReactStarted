var gulp = require('gulp');
var liteServer = require('gulp-live-server');

gulp.task('live-server', function(){
    var server = new liteServer('server/main.js');
    server.start();
});