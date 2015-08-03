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

// style vendor files
import "bootstrap-webpack";

//----------------app files-----------------------------------------------------
import './core/core';
import './components/components';
import mainModule from './main-module';


angular.element(document).ready(function () {
    angular.bootstrap(document, [mainModule.name], {
        strictDi: true
    });
});
