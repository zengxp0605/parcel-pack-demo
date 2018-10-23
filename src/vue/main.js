
import Vue from 'vue';

// 这种引入方式不能使用 store ???
// import Vue from 'vue/dist/vue.common';

import App from './app';
import store from './store';

const app = window.addEventListener('load', () => {
    // new Vue({
    //     el: '#vue-root',
    //     name: App,
    //     store,
    //     components: { App },
    //     template: `<App />`,
    // })

    new Vue({
        components: { App },
        // router,
        store,
        template: '<App/>'
    }).$mount('#vue-root')

});

export default app;