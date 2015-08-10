/**
 * Created by dennis on 28/07/2015.
 */

import {Config, Inject, Run} from 'annotations/ng-decorator';

class AppUtils {
    @Run()
    @Inject('$injector')
    static setInjector($injector) {
        AppUtils.$injector = $injector;
    }

    static pascalCaseToCamelCase(string) {
        if (!string) {
            return '';
        }
        return string.charAt(0).toLowerCase() + string.substring(1);
    }

    static dashCaseToCamelCase(string) {
        if (!string) {
            return '';
        }
        return string.replace(/-([a-z])/ig, function (all, letter) {
            return letter.toUpperCase();
        });
    }

    static getService(name) {
        return AppUtils.$injector.get(name);
    }


}

export default  AppUtils;