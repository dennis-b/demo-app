'use strict';
import appPath from '../paths';
import path from 'path';
import gulp from 'gulp';
import gutil from 'gulp-util';
import webpackStream from 'webpack-stream';
import webpack from 'webpack';
import rt from"gulp-react-templates";
import webpackConfig from"../../webpack.config.js";


gulp.task("webpack:build", function (callback) {
    // modify some webpack config options
    let myConfig = Object.create(webpackConfig);
    myConfig.plugins = myConfig.plugins.concat(
        new webpack.DefinePlugin({
            "process.env": {
                // This has effect on the react lib size
                "NODE_ENV": JSON.stringify("production")
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            mangle: false
        })
    );

    // run webpack
    webpack(myConfig, function (err, stats) {
        if (err) throw new gutil.PluginError("webpack:build", err);
        gutil.log("[webpack:build]", stats.toString({
            colors: true
        }));
        callback();
    });
});


// modify some webpack config options
let myDevConfig = Object.create(webpackConfig);
myDevConfig.devtool = "sourcemap";
myDevConfig.debug = true;

// create a single instance of the compiler to allow caching
let devCompiler = webpack(myDevConfig);

gulp.task("webpack:build-dev", function (callback) {
    // run webpack
    devCompiler.run(function (err, stats) {
        if (err) throw new gutil.PluginError("webpack:build-dev", err);
        gutil.log("[webpack:build-dev]", stats.toString({colors: true}));
        callback();
    });
});


//gulp.task('rt:build', function () {
//    gulp.src('src/**/*.rt')
//        .pipe(rt({modules: 'amd'}))
//        .pipe(gulp.dest('src'));
//});


gulp.task("dev:build", ["webpack:build-dev"]);
gulp.task("build", ["webpack:build"]);
