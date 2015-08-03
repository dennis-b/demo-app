import   './style/view-demo.css'
import template from './view-demo.html';
import {View} from 'annotations/directive-decorator';

@View({
    selector: 'ng-directive-demo',
    template: template
})
//
class NgViewDemo {
    constructor($window) {
        this.$window = $window;
        this.items = ['One', 'Two', 'Three'];
    }
}

export default NgViewDemo
