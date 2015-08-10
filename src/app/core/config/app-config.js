import {Config, Inject, Run} from 'annotations/ng-decorator';

class Configuration {
    @Config()
    @Inject('localStorageServiceProvider', '$compileProvider', '$httpProvider', '$urlRouterProvider')
    static configFactory(localStorageServiceProvider, $compileProvider, $httpProvider, $urlRouterProvider) {
        localStorageServiceProvider.setPrefix('crm-plugins');
        $compileProvider.debugInfoEnabled(false);
        $httpProvider.useApplyAsync(true);
        $urlRouterProvider.otherwise('/rtdemo');
        $urlRouterProvider.when('/', '/rtdemo');
    }
}

class OnRun {
    @Run()
    @Inject('localStorageService')
    static runFactory(localStorageService) {
        localStorageService.clearAll();
    }
}
