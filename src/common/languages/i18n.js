// 配置
import Vue from 'vue'
import VueI18n from 'vue-i18n';
Vue.use(VueI18n) // 通过插件的形式挂载//中 cn 英 us
export const i18n = new VueI18n({
    locale: localStorage.getItem('language') || 'cn',
    //this.$i18n.locale // 通过切换locale的值来实现语言切换
    messages: {
        'cn': require('./zh.json'), // 中文语言包
        'us': require('./en.json'), // 英文语言包
    }
});
// console.log(i18n, 'i18n')
// 重新封装方法
export function $t(args) {
    return i18n.tc.call(i18n, args);
}
