/*
 * @Descripttion: 
 * @version: 
 * @Author: huangshaopeng
 * @LastEditors: Please set LastEditors
 */
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
 * 活动列表
 * @param {*} p
 */
api.bannerlist = p => get('/v1/banner/list', p);
/**
 * 首页随机作品展示列表
 * @param {*} p
 */
api.show_list = p => get('/v1/works/show_list', p);
/**
 * 首页作品排行榜-交易榜
 * @param {*} p
 */
api.workstrade = p => get('/v1/rank/works/trade', p);
/**
 * 首页作品排行榜-引用榜
 * @param {*} p
 */
api.workscite = p => get('/v1/rank/works/cite', p);
/**
 * 首页作品排行榜-人气榜
 * @param {*} p
 */
api.workspopular = p => get('/v1/rank/works/popular', p);
/**
 * 首页作品排行榜-价高榜
 * @param {*} p
 */
api.worksprice = p => get('/v1/rank/works/price', p);
/**
 * 首页作者排行-产量之王
 * @param {*} p
 */
api.works_num = p => get('/v1/rank/author/works_num', p);
/**
 * 首页作者排行-畅销作者
 * @param {*} p
 */
api.best_seller = p => get('/v1/rank/author/best_seller', p);
/**
 * 首页作者排行-版权收益榜
 * @param {*} p
 */
api.copyright_proceeds = p => get('/v1/rank/author/copyright_proceeds', p);
/**
 * 首页作者排行-块量之王
 * @param {*} p
 */
api.block_num = p => get('/v1/rank/author/block_num', p);
/**
 * 我的抵押版权列表
 * @param {*} p
 */
api.copyright = p => get('/v1/my/copyright', p);
/**
 * 作品上架版权局可获得的LCT
 * @param {*} p
 */
api.works_price = p => get('/v1/copyright/works_price', p);
/**
 * 图纸存档
 * @param {*} p
 */
api.works_save = p => post('/v1/works/save', p);
/**
 * 图纸存档
 * @param {*} p
 */
api.works_save = p => post('/v1/works/save', p);
/**
 * 新建图纸
 * @param {*} p
 */
api.works_create = p => post('/v1/works/create', p);
/**
 * 作品复刻轨迹
 * @param {*} p
 */
api.copy_history = p => get('/v1/works/copy_history', p);
/**
 * tag列表
 * @param {*} p
 */
api.tag_list = p => get('/v1/tag/list', p);
/**
 * 为作品设置标签
 * @param {*} p
 */
api.set_tag = p => post('/v1/works/set_tag', p);
/**
 * 作品包含复刻品
 * @param {*} p
 */
api.included_works = p => get('/v1/works/included_works', p);
/**
 * 作品、图纸详情
 * @param {*} p
 */
api.works_detail = p => get('/v1/works/detail', p);
/**
 * 作品用块详情
 * @param {*} p
 */
api.block_detail = p => get('/v1/works/block_detail', p);
/**
 * 拆毁作品可获得的块与消耗的lct
 * @param {*} p
 */
api.recover_detail = p => get('/v1/works/recover_detail', p);
/**
 * 作品市场和版权局列表
 * @param {*} p
 */
api.market_list = p => get('/v1/works/market_list', p);
/**
 * 查看他人作品列表
 * @param {*} p
 */
api.target_list = p => get('/v1/works/target_list', p);
/**
 * 我的lct收益构成
 * @param {*} p
 */
api.my_proceeds = p => get('/v1/my/proceeds', p);
/**
 * 收藏作品
 * @param {*} p
 */
api.collect = p => post('/v1/works/collect', p);
/**
 * 取消收藏
 * @param {*} p
 */
api.cancel_collect = p => post('/v1/works/cancel_collect', p);
/**
 * 我的标记
 * @param {*} p
 */
api.collection_list = p => get('/v1/my/collection_list', p);
/**
 * 我的块
 * @param {*} p
 */
api.my_block = p => get('/v1/my/block', p);
/**
 * 我的复刻品
 * @param {*} p
 */
api.my_copy = p => get('/v1/my/copy', p);
/**
 * 我的作品列表
 * @param {*} p
 */
api.my_works = p => get('/v1/my/works', p);
/**
 * 查看是否有授权
 * @param {*} p
 */
api.my_is_approved = p => get('/v1/my/is_approved', p);
/**
 * 查看是否有授权
 * @param {*} p
 */
api.my_notice = p => get('/v1/my/notice', p);
/**
 * 矿池信息
 * @param {*} p
 */
api.pool_info = p => get('/v1/pool/info', p);
/**
 * 举报
 * @param {*} p
 */
api.report = p => post('/v1/account/report', p);
/**
 * 获取图纸详细信息
 * @param {*} p
 */
api.blueprint_info = p => get('/v1/works/blueprint_info', p);
/**
 * 获取图纸详细信息
 * @param {*} p
 */
api.upload = p => post('/v1/works/upload', p);
/**
 * 删除图纸
 * @param {*} p
 */
api.remove = p => post('/v1/works/remove', p);
/**
 * 活动详情
 * @param {*} p
 */
api.activity_detail = p => get('/v1/activity/detail', p);
/**
 * 质押列表
 * @param {*} p
 */
api.stake_list = p => get('/v1/token/stake_list', p);
/**
 * 提币列表
 * @param {*} p
 */
api.withdraw_list = p => get('/v1/token/withdraw_list', p);
/**
 * 质押详情列表
 * @param {*} p
 */
api.stake_detail = p => get('/v1/token/stake_detail', p);
/**
 * 矿池总览
 * @param {*} p
 */
api.pool_overview = p => get('/v1/token/pool_overview', p);
/**
 * 矿池算力排行
 * @param {*} p
 */
api.power_rank = p => get('/v1/token/power_rank', p);
/**
 * 判断质押的币种是否有授权
 * @param {*} p
 */
api.is_approved = p => get('/v1/token/is_approved', p);
/**
 * 介绍图片
 * @param {*} p
 */
api.introduce = p => get('/v1/banner/introduce', p);
/**
 * 图纸是否可以上链
 * @param {*} p
 */
api.can_onChain = p => get('/v1/works/can_onChain', p);
/**
 * 作品上架版权局可获得的LTC_copy
 * @param {*} p
 */
api.onChain_lct = p => get('/v1/works/onChain_lct', p);
/**
 * 公告弹窗
 * @param {*} p
 */
api.system_notice = p => get('/v1/system/notice', p);
/**
 * 奖池概况
 * @param {*} p
 */
api.jackpot_overview = p => get('/v1/jackpot/overview', p);
/**
 * 奖券购买记录
 * @param {*} p
 */
api.purchase_records = p => get('/v1/jackpot/purchase_records', p);
/**
 * 抽奖记录
 * @param {*} p
 */
api.Lottery_records = p => get('/v1/jackpot/lottery_records', p);
/**
 * 抽奖面板总览
 * @param {*} p
 */
api.lottery_overview = p => get('/v1/jackpot/lottery_overview', p);
/**
 * 签到
 * @param {*} p
 */
api.account_sign = p => post('/v1/account/sign', p);
/**
 * 抽奖
 * @param {*} p
 */
api.jackpot_draw = p => post('/v1/jackpot/draw', p);
/**
 * nft矿池总览
 * @param {*} p
 */
api.nft_pool_overview = p => get('/v1/nft/pool_overview', p);
/**
 * 可质押的nft列表
 * @param {*} p
 */
api.nft_item_list = p => get('/v1/nft/item_list', p);
/**
 * 已质押和可提现列表
 * @param {*} p
 */
api.nft_stake_list = p => get('/v1/nft/stake_list', p);
/**
 * 个人信息
 * @param {*} p
 */
api.stake_info = p => get('/v1/account/stake_info', p);
/**
 * 分奖记录
 * @param {*} p
 */
api.reward_history = p => get('/v1/jackpot/reward_history', p);
/**
 * 是否有空投弹窗
 * @param {*} p
 */
api.airdrop_status = p => get('/v1/account/airdrop_status', p);
/**
 * 作品上链锁定
 * @param {*} p
 */
api.works_lock = p => post('/v1/works/lock', p);
/**
 * 首页更多作品
 * @param {*} p
 */
api.works_more = p => get('/v1/works/more', p);
/**
 * lct收入支出记录
 * @param {*} p
 */
api.lct_records = p => get('/v1/my/lct_records', p);
/**
 * 为作品命名
 * @param {*} p
 */
api.set_name = p => post('/v1/works/set_name', p);
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
