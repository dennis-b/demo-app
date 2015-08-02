/**
 * Created by denis on 28/07/2015.
 */

import angular from 'angular';
import app from '../../crm-plugins-module';

function RouteConfig(stateName, options) {
    return function decorator(target) {
        app.config(['$stateProvider', ($stateProvider) => {
            $stateProvider.state(stateName, Object.assign({
                controller: target,
                controllerAs: 'vm'
            }, options));
        }]);
        app.controller(target.name, target);
    };
}


export {RouteConfig};