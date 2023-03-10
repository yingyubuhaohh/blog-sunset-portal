import axios from "axios";
import store from "../store"
import { ElMessage } from 'element-plus'

const service = axios.create({
    // baseURL: "http://150.158.172.107:8090",
    baseURL: "http://localhost:8091",
    timeout: 10000,
})

//请求拦截器
/*service.interceptors.request.use(function (config){
    //添加token
    if(store.state.token){
        config.headers['token'] = sessionStorage.token;
    }
    return config;
},function (error){
    return Promise.reject(error);
});*/

//响应拦截器
service.interceptors.response.use(function (response){
    const res = response.data;
    if(res.code !== 20000 && res.code !== 200){
        if(res.code === 401){
            ElMessage({
                type: 'warning',
                showClose: true,
                message: '用户名或密码错误，请重新登录！'
            })
            return Promise.reject('error');
        }
        console.log("error");
    }
    return response;
},function (error){
    return Promise.reject(error);
})

export default service;