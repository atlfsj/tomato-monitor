/*
 * @Description:
 * @Author: 高鸿宇
 * @Date: 2021-05-05 16:37:55
 * @LastEditors: 高鸿宇 10395429+gao-hong-yu@user.noreply.gitee.com
 * @LastEditTime: 2023-01-23 08:49:32
 * 
 */
import {createRouter, createWebHashHistory} from 'vue-router'

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
        path: '/m1',
        name: 'M1',
        component: () => import('../pages/m1')
    },
    {
        path: '/m2',
        name: 'M2',
        component: () => import('../pages/m2')
    },
    {
       path: '/show',
       name: 'show',
     component: () => import('../pages/m3/show.vue') 
   },
   {
path:'/find',
name:'find',
component:()=>import('../pages/m3/find.vue')

   }
   
]

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
})

export default router
