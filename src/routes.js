import VueRouter from 'vue-router';
import Vue from "vue";


Vue.use(VueRouter);

/**
 * Routes CallBack
 * @type {VueRouter}
 */
const router = new VueRouter({

    routes: [
        {
            path: '/login',
            component: require('./components/OAuth/LoginComponent').default,

        },

    ]
})

export default router;