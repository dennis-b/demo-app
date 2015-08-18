import template from './directive-demo.html';
import {RouteConfig} from 'annotations/route-decorator';

@RouteConfig('app.directivedemo', {
    url: '/directivedemo',
    template: template
})
//
class ViewDemo {
    constructor() {
        this.items = ['One', 'Two', 'Three'];
    }
}
