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
        name: 'Find1',
        component: () => import('../pages/m3/Find1.vue')

    },
]

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
})

export default router
