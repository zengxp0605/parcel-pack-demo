
import Vue from 'vue';

import App from './app';

const app = window.addEventListener('load', () => {
    // new Vue({
    //     el: '#vue-root',
    //     name: App,
    //     components: { App },
    //     template: `<App />`,
    // })

    new Vue({
        components: { App },
        // router,
        // store,
        template: '<App/>'
    }).$mount('#vue-root')

});

export default app;