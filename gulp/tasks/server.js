import gulp from 'gulp';
import webserver from 'gulp-webserver';
import paths from '../paths';
gulp.task('webserver', function () {
    console.log(paths.root);
    gulp.src(paths.root)
        .pipe(webserver({
            livereload: true,
            fallback: "src/index.html",
            directoryListing: {
                enable: true,
                path: paths.root
            },
            open: true,
            port: 8002
        }));
});
