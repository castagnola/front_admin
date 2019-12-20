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
            path: '/',
            redirect : require('./components/OAuth/LoginComponent').default,
            meta: {
                forVisitors: true
            }
        },
        {
            path: '/login',
            component: require('./components/OAuth/LoginComponent').default,
            meta: {
                forVisitors: true
            }
        },
        {
            path: '/register',
            component: require('./components/OAuth/RegisterComponent').default,
            meta: {
                forVisitors: true
            }
        },
        {
            path: '/master',
            component: require('./components/layouts/MasterComponent').default,
            meta: {
                forAuth: true
            },
            children:[
                {
                    path: '/children',
                    component: require('./components/layouts/MasterComponent').default,
                }

            ]

        },

    ]
});

/**
 * Guards from rotes where the user is login at the app
 */
router.beforeEach(
    (to, from, next) => {
        if (to.matched.some(record => record.meta.forVisitors)) {
            if (Vue.auth.isAuthenticated()) {
                next({
                    path: '/master'
                })
            } else next()
        } else if (to.matched.some(record => record.meta.forAuth)) {
            if (!Vue.auth.isAuthenticated()) {
                next({
                    path: '/login'
                })
            } else next()
        } else next()
    }
);

export default router;