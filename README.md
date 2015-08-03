# demo-app
angular + es6/7 + react webpack Starter


usage : 
```
import './style/rt-demo.css'
import {ReactView} from 'annotations/directive-decorator';
import React from 'react/addons';
import template from './rt-demo-template.rt';
import AppUtils from '../../core/utils/app-utils';

@ReactView({
    selector: 'rt-component-demo',
    propsToBind: ['demoItems']
})
//
class RtDemo extends React.Component {
    constructor(props) {
        super(props);
        console.log(AppUtils.getService("$window"))
        this.state = {
            items: ['One', 'Two', 'Three']
        }
    }

    render() {
        return template.apply(this);
    }
}

```
