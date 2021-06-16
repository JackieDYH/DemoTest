import Vue from 'vue'
import axios from 'axios'; // 引入axios
import Qs from 'qs'; // 引入qs模块，用来序列化post类型的数据key=value 形式
import Cookies from 'js-cookie'; //cookie插件
import store from '../../store/index';
import { $t } from "@/common/languages/i18n.js"; // 多语言
import router from '../../router/index'; //引入路由
import { Message } from 'element-ui'; // 消息提醒

// 环境的切换
// https://jsonplaceholder.typicode.com/posts/1/comments
let baseURL = '';
if (process.env.VUE_APP_NODE_ENV == 'dev') {
    baseURL = 'http://8.133.160.218:8098'; //'https://jsonplaceholder.typicode.com';
} else if (process.env.VUE_APP_NODE_ENV == 'beta') {
    baseURL = 'http://localhost:3000';
} else if (process.env.VUE_APP_NODE_ENV == 'prod') {
    baseURL = 'https://jsonplaceholder.typicode.com';
} else {
    baseURL = 'https://jsonplaceholder.typicode.com';
}
console.log(baseURL,"baseURL");
//1. 创建新的axios实例，
const service = axios.create({
    // 公共接口--这里注意后面会讲
    baseURL,
    // 超时时间 单位是ms，这里设置了3s的超时时间
    timeout: 3 * 1000
})
// 请求头 X-GW-NONCE中需要的参数
// function uuid() {
//     function S4() {
//         return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
//     }
//     return (
//         S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4()
//     );
// }

// 2.请求拦截器
service.interceptors.request.use(config => {
    //发请求前做的一些处理，数据转化，配置请求头，设置token,设置loading等，根据需求去添加
    // config.data = JSON.stringify(config.data); //数据转化json字符串 {"key":"value","key2":"value"}
    config.data = Qs.stringify(config.data); //使用Qs转换键值对 key=value&key2=value2 格式 Qs.stringify(params)
    config.headers = {
        'Content-Type': 'application/x-www-form-urlencoded', //配置请求头
        'X-GW-TIME': new Date().getTime(), // 请求时间
        // 'X-GW-NONCE': uuid(),
        // 'Authorization': window.sessionStorage.getItem("cookie"), // Cookies.get('cookie')
    }
    
    // 不同请求设置不同头
    // config.headers = Object.assign(config.headers,config.headers); // 可以根据需要设置不同的请求头内容 可以在http.js中自己设置

    // if(config.method == 'get'){
    //     config.headers = {'Content-Type': 'application/json'}
    // } else if(config.method == 'post'){
    //     config.headers = {'Content-Type': 'application/x-www-form-urlencoded'}
    // } else {
    //     config.headers = {'Content-Type': 'application/x-www-form-urlencoded'}
    // }

    //注意使用token的时候需要引入cookie方法或者用本地localStorage等方法，推荐js-cookie
    // Cookies.set('token','我是cookie');
    const token = store.state.access_token || sessionStorage.getItem("access_token");;// Cookies.get('token') || "";//这里取token之前，你肯定需要先拿到token,存一下
    // if (Cookies.get('token') && typeof window !== "undefined" ) { //兼容ssr环境
    if (token) { // 两种携带方式 选其一
        config.params = { 'token': token } //如果要求携带在参数中
        // config.headers.token = token; //如果要求携带在请求头中
    }
    console.log('config:',config);
    return config;
}, error => {
    Promise.reject(error);
})

// 3.响应拦截器
service.interceptors.response.use(response => {
    //接收到响应数据并成功后的一些共有的处理，关闭loading等

    return response.data; //去除两层data
}, error => {
    /***** 接收到异常响应的处理开始 *****/
    if (error && error.response) {
        // 1.公共错误处理
        // 2.根据响应码具体处理
        switch (error.response.status) {
            case 400:
                error.message = '错误请求';
                break;
            case 401:
                error.message = '未授权，请重新登录';
                break;
            case 403:
                error.message = '拒绝访问';
                break;
            case 404:
                error.message = '请求错误,未找到该资源';
                // window.location.href = "/NotFound";
                break;
            case 405:
                error.message = '请求方法未允许';
                break;
            case 408:
                error.message = '请求超时';
                break;
            case 500:
                error.message = '服务器端出错';
                break;
            case 501:
                error.message = '网络未实现';
                break;
            case 502:
                error.message = '网络错误';
                break;
            case 503:
                error.message = '服务不可用';
                break;
            case 504:
                error.message = '网络超时';
                break;
            case 505:
                error.message = 'http版本不支持该请求';
                break;
            default:
                error.message = `连接错误${error.response.status}`;
        }
    } else {
        // 超时处理
        if (JSON.stringify(error).includes('timeout')) {
            Message.error('服务器响应超时，请刷新当前页');
        }
        error.message = '连接服务器失败';
    }

    Message.error(error.message)
    /***** 处理结束 *****/
    //如果不需要错误处理，以上的处理过程都可省略
    return Promise.resolve(error.response);
})
//4.导入文件
export default service
