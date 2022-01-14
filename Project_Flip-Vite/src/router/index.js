import { createRouter, createWebHistory } from 'vue-router'

import Home from '/src/components/Home.vue'
import NotFound from '../views/page404NotFound.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about', // this is the path that will be used in the url
        name: 'About', // this is the name of the route
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            // this is the component that will be loaded
            import(/* webpackChunkName: "about" */ '../views/About.vue'), // this is the path to the component being imported
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
        path: '/contact',
        name: 'Contact',
        component: () =>
            import(/* webpackChunkName: "contact" */ '../views/Contact.vue'),
    },
    {
        path: '/build',
        name: 'Build',
        component: () =>
            import(/* webpackChunkName: "build" */ '../views/Build.vue'),
    },
    {
        path: '/signup',
        name: 'Signup',
        component: () =>
            import(/* webpackChunkName: "signup" */ '../views/Signup.vue'),
    },
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
