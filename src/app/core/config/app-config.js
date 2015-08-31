import {Config, Inject, Run} from 'annotations/ng-decorator';

class Configuration {
    @Config()
    @Inject('localStorageServiceProvider', '$compileProvider', '$httpProvider', '$urlRouterProvider', 'hljsServiceProvider')
    static configFactory(localStorageServiceProvider, $compileProvider, $httpProvider, $urlRouterProvider, hljsServiceProvider) {
        localStorageServiceProvider.setPrefix('demo-app');
        $compileProvider.debugInfoEnabled(false);
        $httpProvider.useApplyAsync(true);
        $urlRouterProvider.otherwise('/rtdemo');
        $urlRouterProvider.when('/', '/rtdemo');

        hljsServiceProvider.setOptions({
            // replace tab with 4 spaces
            tabReplace: '    '
        });
    }
}

class OnRun {
    @Run()
    @Inject('localStorageService', '$rootScope')
    static runFactory(localStorageService, $rootScope) {
        localStorageService.clearAll();
    }
}
