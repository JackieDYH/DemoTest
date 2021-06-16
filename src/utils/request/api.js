/*
 * @version: 
 * @Description: file content
 * @Author: Jackie
 * @Date: 2021-06-16 13:39:09
 * @LastEditors: Jackie
 * @LastEditTime: 2021-06-16 16:23:31
 */
// 导入get和post方法
import http from './http';

const api = new Object();

/**
 * 示例
 * @param {*} p
 */
api.postList_API = p => http.post('/comments', p);
/**
 * 示例
 * @param {*} p
 */
api.getList_API = p => http.get('/comments', p);
api.getList2_API = p => http.get('/artist/top/song', p);

/**
 * 验签颁发token
 * @param {*} p
 */
 api.verify_signature = p => http.post('/v1/verify_signature', p);

// 全部导出
export default api;