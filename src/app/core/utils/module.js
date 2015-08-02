import AppUtils from './app-utils';
import {Config,Inject} from 'annotations/ng-decorator';


class Module {

    constructor() {
        this.annotate = angular.injector().annotate;
    }

    directiveFactory(constructorFn) {

        constructorFn = this.normalizeConstructor(constructorFn);

        if (!constructorFn.prototype.compile) {
            constructorFn.prototype.compile = () => {
            };
        }

        var originalCompileFn = this.cloneFunction(constructorFn.prototype.compile);
        Module.override(constructorFn.prototype, 'compile', function () {
            return function () {
                originalCompileFn.apply(this, arguments);
                if (constructorFn.prototype.link) {
                    return constructorFn.prototype.link.bind(this);
                }
            };
        });

        return this.createFactoryArray(constructorFn);
    }

    normalizeConstructor(input) {
        var constructorFn;

        if (angular.isArray(input.constructor)) {
            var injected = input.slice(0, input.length - 1);
            constructorFn = input[input.length - 1];
            constructorFn.$inject = injected;
        } else {
            constructorFn = input;
            constructorFn.$inject = this.annotate(input);
        }

        return constructorFn;
    }

    createFactoryArray(constructorFn) {
        var args = constructorFn.$inject || [];
        var factoryArray = args.slice(); // create a copy of the array
        factoryArray.push((...args) => {
            var instance = new constructorFn(...args);
            for (var key in instance) {
                instance[key] = instance[key];
            }
            return instance;
        });

        return factoryArray;
    }

    cloneFunction(original) {
        return function () {
            return original.apply(this, arguments);
        };
    }

    static override(object, methodName, callback) {
        object[methodName] = callback(object[methodName])
    }
}

export default  Module;