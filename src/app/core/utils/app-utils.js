/**
 * Created by denis on 28/07/2015.
 */

import {Config, Inject, Run} from 'annotations/ng-decorator';

class AppUtils {
    @Run()
    @Inject('$injector')
    static setInjector($injector) {
        AppUtils.$injector = $injector;
    }

    static pascalCaseToCamelCase(str) {
        return str.charAt(0).toLowerCase() + str.substring(1);
    }

    static dashCaseToCamelCase(string) {
        return string.replace(/-([a-z])/ig, function (all, letter) {
            return letter.toUpperCase();
        });
    }

    static getService(name) {
        return AppUtils.$injector.get(name);
    }


}

export default  AppUtils;