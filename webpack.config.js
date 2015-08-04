var path = require('path');
var webpack = require("webpack");

module.exports = {
    entry: {
        demoApp: "./src/app/app.js"
    },
    output: {
        path: path.join(__dirname, "build"),
        filename: "[name].bundle.js"
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'src'),
                exclude: [/app\/lib/, /jspm_packages/, /.tmp/, /build/, /gulp/, /node_modules/],
                loader: ['babel-loader'], query: {stage: 0}
            },
            {test: /\.rt$/, loader: 'babel-loader!react-templates-loader'},
            {test: /\.html$/, loader: 'raw'},
            {test: /\.styl$/, loader: 'style!css!stylus'},
            {test: /\.css$/, loader: "style-loader!css-loader"},
            {test: /\.less$/, loader: "style!css!less"},

            {test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery'},
            {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
            {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"}
        ]
    },

    resolve: {
        alias: {
            annotations: path.join(__dirname, "src/app/core/annotations")
        }
    },

    plugins: [
        new webpack.ProvidePlugin({
            jQuery: "jquery",
            $: "jquery",
            "window.jQuery": "jquery",

            _: "lodash",
            "window._": "lodash",
        })
    ]
};