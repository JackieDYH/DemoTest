/*
 * @Descripttion: 
 * @version: 
 * @Author: huangshaopeng
 * @Date: 2020-12-12 14:31:11
 * @LastEditors: Jackie
 * @LastEditTime: 2021-06-15 14:07:16
 */
import { Notify, Toast } from 'vant';
import { $t } from '@/common/languages/i18n.js';
export default {
	data() {
		return {
			setTimeOutLast: 60,
			rightCodeText: '获取验证码',
			minxuserInfo: {}
		}
	},
	mounted() {
		window.addEventListener("scroll", this.scrollEvent, false);
	},
	destroyed() {
		window.removeEventListener("scroll", this.scrollEvent, false);
	},
	methods: {
		tipsB(){
			Toast($t("myInfo.jingqingqidai"));
		},
		scrollEvent() {
			if (
				document.documentElement.scrollTop +
				document.documentElement.clientHeight >=
				document.body.scrollHeight
			) {
				this.onBottom();
			}
		},
		onBottom() { },
		copyAddress() {
			Toast.success('复制成功')
		},
		copyAddressError() {
			Toast.success('error')
		},
		openFangDaJing(item) {
			console.log(item)
			this.$router.push("./ViewSpellTower?works_id=" + item.id)
		},
		sendSms(mobile) {
			let interver = null;
			if (this.setTimeOutLast != 60) {
				return;
			}
			return new Promise((reslove) => {
				if (mobile == "") {
					Notify({ type: 'warning', message: '请输入手机号' });
					reslove(false);
				} else {
					if (/^(1[0-9])\d{9}$/.test(mobile)) {
						this.$axios.getmobel("/car/get_sms", {
							phone: mobile
						}).then(res => {
							if (!res.error_msg) {
								Notify({ type: 'success', message: "发送成功请注意查收" });
								interver = setInterval(() => {
									this.setTimeOutLast--;
									if (this.setTimeOutLast == 0) {
										this.setTimeOutLast = 60;
										this.rightCodeText = '获取验证码';
										clearInterval(interver);
									} else {
										this.rightCodeText = this.setTimeOutLast;
									}
								}, 1000);
								reslove(true);
							} else {
								Notify({ type: 'warning', message: res.error_msg });
								reslove(false);
							}
						});
					} else {
						Notify({ type: 'warning', message: "输入手机号有误" });
						reslove(false);
					}
				}
			})
		},
		getMinxinUserInfo() { },
	}
}
