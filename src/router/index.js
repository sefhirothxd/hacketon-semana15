import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Error from '@/views/Error';

Vue.use(VueRouter);

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/video',
        name: 'Video',
        component: () =>
            import ( /* webpackChunkName: "video" */ '../views/Video/Video.vue'),
        children: [{
                path: '',
                name: 'video-list',
                component: () =>
                    import (
                        /* webpackChunkName: "video-list" */
                        '../views/Video/VideoList.vue'
                    ),
            },
            {
                path: '/video/add',
                name: 'video-add',
                component: () =>
                    import (
                        /* webpackChunkName: "video-add" */
                        '../views/Video/VideoAdd.vue'
                    ),
            },
            {
                path: '/video/:id',
                name: 'video-detail',
                component: () =>
                    import (
                        /* webpackChunkName: "video-add" */
                        '../views/Video/VideoDetail.vue'
                    ),
            },
        ],
    },
    {
        path: '/mapa',
        name: 'Mapa',
        component: () =>
            import ( /* webpackChunkName: "video" */ '../views/Mapa.vue'),
    },
    {
        path: '*',
        name: 'error',
        component: Error,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;