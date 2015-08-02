import   '../../../assets/style/sign-up.css'
import template from './sign-up.html';
import {Directive} from 'annotations/directive-decorator';
import {Inject} from 'annotations/ng-decorator';

@Directive({selector: 'crm-sign-up-plugin'})
//
class SignUpPlugin {
    constructor($window) {
        this.template = template;
        this.restrict = 'EA';
        this.scope = true;
        this.$window = $window;
        console.log($window);
    }

    link(scope) {
        scope.items = [1, 2, 3, 4, 5]
    }
}

export default SignUpPlugin
