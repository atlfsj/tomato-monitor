/*
 * @Author:charles
 * @Date: 2021-12-19 17:27:34
 * @LastEditTime: 2023-01-23 09:11:07
 * @LastEditors: 高鸿宇 10395429+gao-hong-yu@user.noreply.gitee.com
 * @Description:
 */
/*
import axios from 'axios'
// create an axios instance
const service = axios.create({
    baseURL: "http://127.0.0.0:3000", // url = base url + request url
    timeout: 10000 // request timeout
})

// response interceptor
service.interceptors.response.use(
    response => {
        // res就是后端返回来的结果， { status,message,data,timestamp}
        const res = response.data
        // if the custom code is not 20000, it is judged as an error.
        if (res.status !== 200) {
            // 消息弹框
            if (res.status === 500) {
                alert(res.message);
            }
            // 返回承诺失败对象
            return Promise.reject(new Error(res.message || 'Error'))
        } else {
            return res
        }
    },
    error => {
        console.log('err' + error) // for debug
        return Promise.reject(error)
    }
)

export function get(url, params) {
    return service.get(url, {
        params, // get 请求时带的参数
        timeout: 10000,
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        }
    })
}

export default service*/
