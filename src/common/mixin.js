//公共方法
import { Notify, Toast } from 'vant';

export default {
	data() {
		return {
			setTimeOutLast: 60,
			rightCodeText: '获取验证码',
			minxuserInfo: {}
		}
	},
	mounted() {
		Notify({type:'success',message:'vue-混入mixin使用-分发 Vue 组件中的可复用功能'});
		// 滚动获取新内容
		window.addEventListener("scroll", this.scrollEvent, false);
	},
	destroyed() {
		window.removeEventListener("scroll", this.scrollEvent, false);
	},
	methods: {
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
			Toast.success(`复制成功`);
		},
		copyAddressError() {
			Notify({ type: 'warning', message: '复制失败' });
		},
	}
}
