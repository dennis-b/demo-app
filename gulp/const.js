/**
 * @author    Martin Micunda {@link http://martinmicunda.com}
 * @copyright Copyright (c) 2015, Martin Micunda
 * @license   GPL-3.0
 */
'use strict';

import util from 'gulp-util';
import moment from 'moment';
import pkg from '../package.json';

//=============================================
//   !!!FEEL FREE TO EDIT THESE CONSTANTS!!!
//=============================================

export const E2E_STAGING_URL     = 'http://your-staging-url.com';
export const E2E_DEVELOPMENT_URL = 'http://127.0.0.1:8000';
export const API_URL = 'http://127.0.0.1:3000';
export const CDN_URL = 'http://martinmicunda.com/employee-scheduling-ui/dist/'; // make sure you include slash in the end!!
export const GH_PAGES_TOKEN = process.env.GH_TOKEN; // Generate OAuth token on GitHub > Settings > Application page
export const GH_PAGES_USERNAME = process.env.USERNAME;
export const GH_PAGES_PROJECT_NAME = process.env.PROJECT_NAME;
export const COVERAGE = {
    statements : 95,
    branches : 90,
    lines : 95,
    functions : 95
};

