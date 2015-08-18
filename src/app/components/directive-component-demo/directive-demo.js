import   './style/directive-demo.css'
import template from './directive-demo.html';
import {Directive} from 'annotations/directive-decorator';

@Directive()
//
class NgDirectiveDemo {
    constructor($window) {
        this.restrict = 'EA';
        this.template = template;
        this.scope = {
            items: '='
        };
        this.$window = $window;
    }

    link(scope, element, attrs) {

    }

}

export default NgDirectiveDemo