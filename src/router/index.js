/*
 * @Description:
 * @Author: 高鸿宇
 * @Date: 2021-05-05 16:37:55
 * @LastEditors: 高鸿宇 10395429+gao-hong-yu@user.noreply.gitee.com
 * @LastEditTime: 2023-01-23 08:49:32
 * 
 */
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
    {
        path: '/show',
        name: 'Show',
        component: () => import('../pages/m3/Show.vue')
    }

]

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
})

export default router
