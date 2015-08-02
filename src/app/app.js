// js vendor files
import 'babel/polyfill';

import $ from 'jquery'
import _ from 'lodash';
import angular from 'angular';
import 'react/addons';
import 'angular-animate';
import 'angular-messages';
import 'angular-ui-bootstrap';
import 'angular-local-storage';
import 'ngReact';

//----------------app files----------------------------------------------------------------
import './core/core';
import PluginLoader from  './plugins/plagins';
import mainModule from './crm-plugins-module';


angular.element(document).ready(function () {
    PluginLoader.load();
    angular.bootstrap(document, [mainModule.name], {
        strictDi: true
    });
});
