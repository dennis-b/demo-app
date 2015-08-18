/**
 * Created by dennis on 27/07/2015.
 */
import angular from 'angular';

const crmPlugins = angular.module('demoApp', [
    // angular modules
    'ngAnimate',
    'ngMessages',
    'ui.router',
    'react',
    'hljs',
    // 3rd party modules
    'LocalStorageModule'
]);

export default crmPlugins;
