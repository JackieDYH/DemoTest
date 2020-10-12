// axios请求封装
import { axios } from './request'
//get
export function getAction(url, parameter) {
    return axios({
        url: url,
        method: 'get',
        params: parameter
    })
}