/*
 * @Descripttion: 
 * @version: 
 * @Author: huangshaopeng
 * @Date: 2020-12-15 23:26:20
 */
export default {
    data() {
        return {}
    },
    mounted() {
        window.changeAccountData = this.changeAccountData;
    },
    methods: {
        changeAccountData() {
            // 更换账号操作
            this.connectAccount();
        },
        connectAccount() {
            // 链接mask
            window.web3mask.onClickConnect((result) => {
                console.log(result, '=====');
                this.$store.commit('logout')
                if (Array.isArray(result.accounts)) {
                    if (result.accounts[0]) {
                        this.$store.commit("setMateMask", result);
                        this.$store.commit("setAddress", result.accounts[0]);
                        sessionStorage.setItem("metamask", JSON.stringify(result));
                        // 去签名下
                        this.signAccount({
                            accounts: result.accounts
                        });
                    }
                }
            });
        },
        signAccount(parmes) {
            // 签名账号
            window.web3mask.signAccount(parmes, (result) => {
                console.log(result);
                if (Array.isArray(result.accounts)) {
                    if (result.accounts[0]) {
                        this.toLogin({
                            address: parmes.accounts[0],
                            word: result.sign,
                            signature: result.signature
                        })
                    } else {
                        this.$store.commit("setAccessToken", "");
                        this.$store.commit("loginApp", false);
                        this.$store.commit("setMateMask", {});
                    }
                } else {
                    this.$store.commit('logout')
                }
            });
        },
        toLogin(parmes) {
            this.$axios.verify_signature({
                address: parmes.address,
                word: parmes.word,
                signature: parmes.signature
            }).then(res => {
                console.log(res,588);
                if (res.errorCode == 0) {
                    this.$store.commit('setAccessToken', res.data.token)
                    this.$store.commit('loginApp', true)
                    sessionStorage.setItem('access_token', res.data.token)
                    // this.getMyBlockData();
                }
            })
        },
        getMyBlockData() {
            console.log(12344)
            this.$axios.my_block({}).then((res) => {
                if (res.errorCode == 0) {
                    if (Array.isArray(res.data.list)) {
                        localStorage.setItem("my_block_arr", JSON.stringify(res.data.list));
                    }
                }
                let time = setTimeout(() => {
                    clearTimeout(time)
                    window.location.reload();
                }, 1500)

            });
        },
        //主合约 共6个方法
        //赠送他人
        coreTransfer(giveTo, giveTokenId, callback) {
            console.log(giveTo, giveTokenId)
            window.web3mask.coreTransfer(giveTo, giveTokenId, (result) => {
                callback(result);
            });
        },
        //授权过 --作品上链
        coreBuild(coordinates, extend, cites, callback) {
            // 作品上链：
            window.web3mask.coreBuild(coordinates, extend, cites, (result) => {
                callback(result);
            });
        },
        //TODO 未授权 --作品上链
        coreBuildWithoutApprove(coordinates, extend, cites, callback) {
            // 作品上链：
            window.web3mask.coreBuildWithoutApprove(coordinates, extend, cites, (result) => {
                callback(result);
            });
        },
        // 拆解作品
        coreResolve(resolveTokenId, callback) {
            // 拆解作品：
            window.web3mask.coreResolve(resolveTokenId, (result) => {
                callback(result);
            });
        },
        // 未授权==拆解作品
        coreResolveWithoutApprove(resolveTokenId, callback) {
            // 拆解作品
            window.web3mask.coreResolveWithoutApprove(resolveTokenId, (result) => {
                callback(result);
            });
        },
        // 作品挂到版权局
        coreCreateCopyOrder(createCopyTokenId, copyPrice, callback) {
            window.web3mask.coreCreateCopyOrder(createCopyTokenId, copyPrice, (result) => {
                callback(result);
            });
        },
        // 作品挂到交易市场
        saleCreateSaleOrder(createSaleTokenId, startPrice, endPrice, duration, callback) {
            // saleCreateSaleOrder
            console.log(createSaleTokenId, startPrice, endPrice, duration)
            window.web3mask.saleCreateSaleOrder(createSaleTokenId, startPrice, endPrice, duration, (result) => {
                callback(result);
            });
        },
        //  lecubeSale[市场合约] 共三个方法
        // 已授权购买作品
        saleBid(bidTokenId, amount,callback) {
            window.web3mask.saleBid(bidTokenId, amount, (result) => {
                callback(result);
            });
        },
        // TODO 未授权购买作品
        saleBidWithoutApprove(bidTokenId, saleTokenNum, callback) {
            window.web3mask.saleBidWithoutApprove(bidTokenId, saleTokenNum, (result) => {
                callback(result);
            });
        },
        // TODO 从交易市场下架
        saleCancel(cancelTokenId, callback) {
            // cancel
            window.web3mask.saleCancel(cancelTokenId, (result) => {
                callback(result);
            });
        },
        // TODO 未授权从交易市场下架
        saleCancelWithApprove(cancelTokenId, callback) {
            // cancel
            window.web3mask.saleCancelWithApprove(cancelTokenId, (result) => {
                callback(result);
            });
        },
        // lecubeCopyright【市场合约】 共三个方法
        // 已授权复刻作品：
        lecubeCopy(copyTokenId, copyTokenNum, callback) {
            console.log(copyTokenId, copyTokenNum)
            window.web3mask.lecubeCopy(copyTokenId, copyTokenNum, (result) => {
                console.log(result, '====已授权复刻作品：')
                callback(result)
            })
        },
        // 未授权复刻作品
        lecubeCopyWithApprove(copyTokenId, copyTokenNum, callback) {
            console.log(copyTokenId, copyTokenNum)
            window.web3mask.lecubeCopyWithApprove(copyTokenId, copyTokenNum, (result) => {
                callback(result);
            });
        },
        // 版权局下架作品
        copyCancel(cancelTokenId, callback) {
            // cancel
            console.log(cancelTokenId)
            window.web3mask.copyCancel(cancelTokenId, (result) => {
                callback(result);
            });
        },
        // 未授权版权局下架作品
        copyCancelWithApprove(cancelTokenId, callback) {
            // cancel
            console.log(cancelTokenId)
            window.web3mask.copyCancelWithApprove(cancelTokenId, (result) => {
                callback(result);
            });
        },
    }
}