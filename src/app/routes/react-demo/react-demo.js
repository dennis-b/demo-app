import template from './react-demo.html';
import {RouteConfig} from 'annotations/route-decorator';

@RouteConfig('app.rtdemo', {
    url: '/rtdemo',
    template: template
})
//
class RtDemo {
    constructor() {
        this.date = new Date();
    }
}
