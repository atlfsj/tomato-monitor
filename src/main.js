/*
 * @Description:
 * @Author: charles
 * @Date: 2021-05-05 16:39:48
 * @LastEditors: charles
 * @LastEditTime: 2021-12-22 09:25:14
 */
import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import './style/layout.scss'
import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            ed: {
                engineer_id: 0,
                device_id: 0
            }
        }
    },
    mutations: {
        SET_ED(state, ed) {
            state.ed = ed;
        }
    }
})

createApp(App).use(router).use(store).use(Antd).use(ElementPlus).mount('#app')
