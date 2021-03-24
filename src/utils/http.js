//导入 
import Vue from 'vue';
import axios from 'axios';

//导入router
import router from '../router';

//全局配置
axios.defaults.baseURL = 'http://localhost:3000/api'

//请求拦截器
axios.interceptors.request.use(function(config){
    if(config.url!='/userLogin'){
        //不是登录接口，携带请求头
        let userInfo = JSON.parse(localStorage.getItem('userInfo')||'{}')
        let token = userInfo.token
        // config.headers.tokan = token
        config.headers.authorization = token
    }
    return config
})

//响应拦截器
axios.interceptors.response.use(function(response){
    //如果是403就跳转到登录页
    if(response.data.code == 403){
        //跳转到登录页
        router.push('/login')
    }
    return response.data

})

//挂载到vue原型对象上
Vue.prototype.$http = axios

export default axios;