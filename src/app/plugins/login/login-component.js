import   '../../../assets/style/login.css'
import {ReactView} from 'annotations/directive-decorator';
import React from 'react/addons';
import templateRt from 'react-templates!./login-template.rt';
import AppUtils from '../../core/utils/app-utils';

@ReactView({
    selector: 'crm-login-plugin',
    propsToBind: ['marketing']
})
//
class LoginPlugin extends React.Component {
    constructor(props) {
        super(props);
        console.log(AppUtils.getService("$window"))
        this.state = {
            items: ['One', 'Two', 'Three']
        }
    }

    render() {
        return templateRt.apply(this);
    }
}
