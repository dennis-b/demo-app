/**
 * Created by dennis on 28/07/2015.
 */

import angular from 'angular';
import app from '../../main-module';

function Run() {
    return function decorator(target, key, descriptor) {
        app.run(descriptor.value);
    };
}

function Config() {
    return function decorator(target, key, descriptor) {
        app.config(descriptor.value);
    };
}

function Service(options) {
    return function decorator(target) {
        if (!options.serviceName) {
            throw new Error('@Service() must contains serviceName property!');
        }
        app.service(options.serviceName, target);
    };
}

function Filter(filter) {
    return function decorator(target, key, descriptor) {
        if (!filter.filterName) {
            throw new Error('@Filter() must contains filterName property!');
        }
        app.filter(filter.filterName, descriptor.value);
    };
}

function Inject(...dependencies) {
    return function decorator(target, key, descriptor) {
        // if it's true then we injecting dependencies into function and not Class constructor
        if (descriptor) {
            const fn = descriptor.value;
            fn.$inject = dependencies;
        } else {
            target.$inject = dependencies;
        }
    };
}

export {Inject, Run, Config, Service, Filter};