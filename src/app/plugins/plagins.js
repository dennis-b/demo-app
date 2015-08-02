/**
 * Created by denis on 27/07/2015.
 */
//import './signup/sign-up-component';
//import './login/login-component';

const CRM_SIGN_UP = "crm-sign-up-plugin";
const CRM_LOGIN = "crm-login-plugin";

class PluginLoader {
    static load() {
        if (PluginLoader.isPluginAddedToTemplate(CRM_SIGN_UP)) {
            require('./signup/sign-up-component');
        }

        if (PluginLoader.isPluginAddedToTemplate(CRM_LOGIN)) {
            require('./login/login-component');
        }
    }

    static isPluginAddedToTemplate(pluginName) {
        return $(pluginName).length > 0
    }
}


export default PluginLoader;