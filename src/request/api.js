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

// 全部导出
export default api;