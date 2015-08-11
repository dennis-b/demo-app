import template from './view-demo.html';
import {RouteConfig} from 'annotations/route-decorator';

@RouteConfig('app.viewdemo', {
    url: '/viewdemo',
    template: template
})
//
class ViewDemo {
    constructor() {
        //nothing here, implement for template logic
    }
}
