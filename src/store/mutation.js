/*
 * @version: 
 * @Description: file content
 * @Author: Jackie
 * @Date: 2021-06-15 17:37:00
 * @LastEditors: Jackie
 * @LastEditTime: 2021-06-16 15:54:30
 */
//修改状态的方法
export default {
    setAdminUser(state, info) {
        state.user = info;
    },
    setMateMask(state, result) {
        Object.assign(state.metamask, result)
    },
    setAddress(state, address) {
        state.address = address;
    },
    setAccessToken(state, access_token) {
        state.access_token = access_token;
        state.isLogin = true
    },
    loginApp(state, isLogin) {
        state.isLogin = isLogin
    },
    logout(state) {
        state.access_token = "";
        Object.keys(state.userInfo).forEach(key => {
            state.userInfo[key] = ""
        });
        state.isLogin = false
        state.metamask = {}
        sessionStorage.removeItem('access_token');
        localStorage.removeItem("metamask");
        localStorage.removeItem("my_block_arr");
        try {
            // dengchu
        } catch (e) {
            //TODO handle the exception
        }
    },
}