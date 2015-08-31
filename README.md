# demo-app
angular + es6/7 + react webpack Starter

# Getting Started
Make sure you have [Nodejs](https://nodejs.org/)

```
$ git clone https://github.com/dennis-b/demo-app.git # or clone your own fork
$ cd demo-app
$ npm install
$ gulp build
$ run on local server # you may use gulp webserver task
```

# usage :
 [example](http://dennis-b.github.io/demo-app/ "example")
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
