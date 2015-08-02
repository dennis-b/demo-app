import {Config, Inject, Run} from 'annotations/ng-decorator';

class Configuration {
    @Config()
    @Inject('localStorageServiceProvider')
    static configFactory(localStorageServiceProvider) {
        localStorageServiceProvider.setPrefix('crm-plugins');
    }
}

class OnRunTest {
    @Run()
    @Inject('localStorageService')
    static runFactory(localStorageService) {
        localStorageService.clearAll();
    }
}
