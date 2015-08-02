import gulp from 'gulp';
gulp.task("watch", ["webpack:build-dev", 'rt'], function () {
    gulp.watch(["src/app/**/*"], ["webpack:build-dev"]);
    gulp.watch("src/app/**/*", ['rt:build'])
});
