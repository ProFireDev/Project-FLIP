import { createRouter, createWebHistory } from 'vue-router'

import Home from '/src/components/Home.vue'
import NotFound from '../views/page404NotFound.vue'

const routes = [
    {
        path: '/Home', // this is the path that will be used in the url
        name: 'Home', // this is the name of the route
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            // this is the component that will be loaded
            import(/* webpackChunkName: "about" */ '../views/Home.vue'), // this is the path to the component being imported
    },
    //404 error on root url fix v2
    {
        path: '/', // this is the path that will be used in the url
        name: 'Home', // this is the name of the route
        component: () =>
            // this is the component that will be loaded
            import(/* webpackChunkName: "about" */ '../views/Home.vue'), // this is the path to the component being imported
    },
    {
        path: '/contact', // this is the path that will be used in the url
        name: 'Contact', // this is the name of the route
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            // this is the component that will be loaded
            import(/* webpackChunkName: "about" */ '../views/Contact.vue'), // this is the path to the component being imported
    },
    {
        path: '/shop',
        name: 'Shop',
        component: () =>
            import(/* webpackChunkName: "shop" */ '../views/Shop.vue'),
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    },
    {
        path: '/cart',
        name: 'Cart',
        component: () =>
            import(/* webpackChunkName: "contact" */ '../views/Cart.vue'),
    },
    //add in contact page
    /*{
        path: '/contact',
        name: 'Contact',
        component: () =>
            import(/* webpackChunkName: "contact" */ //'../views/Contact.vue'),
    //},
    {
        path: '/build',
        name: 'Build',
        component: () =>
            import(/* webpackChunkName: "build" */ '../views/Build.vue'),
    },

    {
        path: '/sign-up',
        name: 'Sign-Up',
        component: () =>
            import(/* webpackChunkName: "build" */ '../views/Sign-Up.vue'),
    },
    /*{
        path: '/signin',
        name: 'Signin',
        component: () =>
            import(/* webpackChunkName: "signup" */ // '../views/Signin.vue'),
    //},
    {
        path: '/offline',
        name: 'offline',
        component: () =>
            import(/* webpackChunkName: "offline" */ '../views/offline.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () =>
            import(
                /* webpackChunkName: "notfound" */ '../views/page404NotFound.vue'
            ),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
