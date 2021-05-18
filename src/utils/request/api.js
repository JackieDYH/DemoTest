import {
  get,
  post
} from './http';
const api = new Object();
/**
 * 验签颁发token
 * @param {*} p
 */
api.verify_signature = p => post('/v1/verify_signature', p);
/**
 * 上币轮次展示
 * @param {*} p
 */
 api.proposal_detail = p => get('/v1/token/proposal_detail', p);
/**
 * 设置作品展示名称还是id
 * @param {*} p
 */
 api.account_set = p => post('/v1/account/set', p);
export default api
