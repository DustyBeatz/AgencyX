var gulp = require('gulp');
    var exefile = 'some/bin/path/MyNiceProgram.exe';
    gulp.task('build', function(){
        gulp.src(exefile).pipe(gulp.dest('../../Binaries/'));
    });
    gulp.task('default', ['build'], function(){
        gulp.watch(exefile, ['build']);
    });
