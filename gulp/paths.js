/**
 * @author    Martin Micunda {@link http://martinmicunda.com}
 * @copyright Copyright (c) 2015, Martin Micunda
 * @license   GPL-3.0
 */
'use strict';

import path from 'path';

const root = path.dirname(__dirname);
const paths = {
    root: root,
    /**
     * The 'gulpfile' file is where our run tasks are hold.
     */
    gulpfile: [`${root}/gulpfile.js`, `${root}/gulp/**/*.js`],
    /**
     * This is a collection of file patterns that refer to our app code (the
     * stuff in `src/`). These file paths are used in the configuration of
     * build tasks.
     *
     * - 'styles'       contains all project css styles
     * - 'images'       contains all project images
     * - 'fonts'        contains all project fonts
     * - 'scripts'      contains all project javascript except config-env.js and unit test files
     * - 'html'         contains main html files
     * - 'templates'    contains all project html templates
     * - 'config'       contains Angular app config files
     */
    app: {
        basePath: `${root}/src/`,
        fonts: [`${root}/src/fonts/**/*.{eot,svg,ttf,woff,woff2}`, `${root}/jspm_packages/**/*.{eot,svg,ttf,woff,woff2}`],
        styles: `${root}/src/assets/style/**/*.style`,
        images: `${root}/src/assets/images/**/*.{png,gif,jpg,jpeg}`,
        config: {
            dev: `${root}/src/app/core/config/core.config.dev.js`,
            test: `${root}/src/app/core/config/core.config.test.js`,
            prod: `${root}/src/app/core/config/core.config.prod.js`
        },
        scripts: [`${root}/src/app/**/*.js`],
        html: `${root}/src/index.html`,
        templates: `${root}/src/app/**/*.html`,
        json: `${root}/src/app/**/*.json`
    },
    /**
     * The 'tmp' folder is where our html templates are compiled to JavaScript during
     * the build process and then they are concatenating with all other js files and
     * copy to 'dist' folder.
     */
    tmp: {
        basePath: `${root}/.tmp/`,
        styles: `${root}/.tmp/style/`,
        scripts: `${root}/.tmp/scripts/`
    },
    /**
     * The 'build' folder is where our app resides once it's
     * completely built.
     *
     * - 'dist'         application distribution source code
     * - 'docs'         application documentation
     */
    build: {
        basePath: `${root}/build/`,
        dist: {
            basePath: `${root}/build/dist/`,
            fonts: `${root}/build/dist/fonts/`,
            images: `${root}/build/dist/images/`,
            styles: `${root}/build/dist/styles/`,
            scripts: `${root}/build/dist/scripts/`
        }
    }
};

export default paths;
