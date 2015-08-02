
import gulp from 'gulp';
// Build and watch cycle (another option for development)
// Advantage: No server required, can run app from filesystem
// Disadvantage: Requests are not blocked until bundle is available,
//               can serve an old app on refresh
gulp.task("watch", ["webpack:build-dev"], function () {
    gulp.watch(["src/app/**/*"], ["webpack:build-dev"]);
});
