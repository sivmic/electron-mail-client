import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'

Vue.use(VueRouter);

let router = new VueRouter({
    routes: [
        { path: '/', component: App }
    ]
});

const app = new Vue({
    router
}).$mount('#app');