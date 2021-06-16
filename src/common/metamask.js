/*
 * @version: 
 * @Description: file content
 * @Author: Jackie
 * @Date: 2021-06-16 13:55:42
 * @LastEditors: Jackie
 * @LastEditTime: 2021-06-16 16:26:25
 */
import web3js from 'web3';

// Web3浏览器检测
if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
}

const web3mask = {};
const resultmsg = {};

// 实例化
// let { ethereum,web3 } = window;
// const web3jsObj = web3 ? new web3js(web3.currentProvider) : {}; //currentProvider 废弃
// const web3jsObj = web3 ? new web3js(ethereum) : {};
window.web3 = new web3js(ethereum);
let web3jsObj = window.web3;


// 检测MetaMask
if (web3jsObj.currentProvider.isMetaMask == true) {
    console.log('metamask 可用');
} else {
    console.log('metamask 不可用');
}

const main = async () => {
    // 获取账户地址
    // const enable = await ethereum.enable(); enable已经废弃
    // const enable = await ethereum.request({ method: 'eth_requestAccounts' });
    // let AccountValue1 = enable[0];
    // console.log(AccountValue1, 5881);

    // let accounts = await web3jsObj.eth.getAccounts();
    // let AccountValue2 = accounts[0];
    // console.log(AccountValue2, 5882);

    let accounts;
    // let web3;判断环境
    web3mask.onClickConnect = async (callback) => {
        try {
            const newAccounts = await ethereum.request({
                method: 'eth_requestAccounts',
            })
            resultmsg.accounts = newAccounts;
            accounts = newAccounts;
            console.log(newAccounts, '=========')
            callback(resultmsg);
            return newAccounts;
        } catch (error) {
            console.error(error)
            callback(resultmsg)
            return null;
        }
    }

    // 签名
    web3mask.signAccount = async (parames, callback) => {
        try {
            const _accounts = parames.accounts
            //console.log(_accounts[0])
            var sign = Math.random().toString(36).slice(-6);
            var word = window.web3.utils.stringToHex(sign)
            const signature = await ethereum.request({
                method: 'personal_sign',
                params: [_accounts[0], word]
            });
            console.log(signature)
            resultmsg.signature = signature;
            resultmsg.word = word;
            resultmsg.sign = sign;
            callback(resultmsg)
        } catch (err) {
            console.error(err)
            resultmsg.error = `签名Error: ${err.message}`
            callback(resultmsg)
        }
    }

    // web3mask.signAccount(enable,(e)=>{console.log(e);});

}
window.addEventListener('DOMContentLoaded', main);

export default web3mask;