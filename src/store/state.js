/*
 * @version: 
 * @Description: file content
 * @Author: Jackie
 * @Date: 2021-06-15 17:37:26
 * @LastEditors: Jackie
 * @LastEditTime: 2021-06-16 15:51:55
 */
//初始状态
export default {
    user: {},//定义状态
    isLogin: false,
    access_token: "",
    metamask: {},
    address: "",
    userInfo: {
        address: "", //钱包地址
        word: "",//签名的内容
        signature: "", //签名
    },
}