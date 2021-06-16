/*
 * @version: 
 * @Description: file content
 * @Author: Jackie
 * @Date: 2021-06-15 11:22:13
 * @LastEditors: Jackie
 * @LastEditTime: 2021-06-15 16:38:07
 */
import InfiniteScroll from './InfiniteScroll';
import InfiniteScrollDisabled from './InfiniteScrollDisabled';
import InfiniteScrollDistance from './InfiniteScrollDistance';

export default {
    install(Vue, options) {
        const directives = {
            InfiniteScroll,
            InfiniteScrollDisabled,
            InfiniteScrollDistance
        };
        Object.keys(directives).forEach(key => {
            directives[key].$options = options;
            Vue.directive(key, directives[key]);
        });
    },
};