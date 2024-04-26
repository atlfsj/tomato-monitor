import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/government'
    },
    {
        path: '/government',
        name: 'Government',
        component: () => import('../pages/government')
    },
    {
        path: '/find',
        name: 'Find',
        component: () => import('../pages/m3/Find.vue')

    },
]

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
})

export default router
