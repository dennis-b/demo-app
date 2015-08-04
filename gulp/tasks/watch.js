import gulp from 'gulp';
gulp.task("watch", ["webpack:build-dev"], function () {
    gulp.watch(["src/app/**/*"], ["webpack:build-dev"]);
});
