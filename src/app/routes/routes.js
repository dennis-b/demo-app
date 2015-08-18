import template from './main-app.html';
import {RouteConfig} from 'annotations/route-decorator';
import './react-demo/react-demo'
import './view-demo/view-demo'
import './directive-demo/directive-demo'

@RouteConfig('app', {
    url: '',
    abstract: true,
    template: template
})
//
class Routes {
    constructor() {
        this.date = new Date();
    }
}
