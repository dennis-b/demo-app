/**
 * Created by dennis on 28/07/2015.
 */

import angular from 'angular';
import app from '../../main-module';
import AppUtils from '../utils/app-utils';
import Module from '../utils/module';
const module = new Module();

function Directive(options) {
    return function decorator(target) {
        const directiveName =
            AppUtils.dashCaseToCamelCase(viewOptions.selector) || AppUtils.pascalCaseToCamelCase(target.name);
        app.directive(directiveName, module.directiveFactory(target));
    };
}

function View(viewOptions) {
    let options = viewOptions;
    const defaults = {
        template: viewOptions.template,
        restrict: 'EA',
        scope: {},
        bindToController: true,
        controllerAs: 'vm'
    };
    return function decorator(target) {
        const directiveName =
            AppUtils.dashCaseToCamelCase(viewOptions.selector) || AppUtils.pascalCaseToCamelCase(target.name);
        options = options || (options = {});
        options.bindToController = options.bindToController || options.bind || {};

        app.directive(directiveName, function () {
            return Object.assign(defaults, {controller: module.normalizeConstructor(target)}, options);
        });

    };
}

function ReactView(viewOptions) {
    return function decorator(target) {
        const directiveName =
            AppUtils.dashCaseToCamelCase(viewOptions.selector) || AppUtils.pascalCaseToCamelCase(target.name);
        ReactDirective.$inject = ['reactDirective'];
        function ReactDirective(reactDirective) {
            return reactDirective(target, viewOptions.propsToBind);
        }

        app.directive(AppUtils.dashCaseToCamelCase(directiveName), ReactDirective);

    };
}

export {View, ReactView, Directive};