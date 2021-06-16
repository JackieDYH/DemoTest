/*
 * @version: 
 * @Description: file content
 * @Author: Jackie
 * @Date: 2021-06-15 11:22:13
 * @LastEditors: Jackie
 * @LastEditTime: 2021-06-15 16:37:36
 */

export default {
    bind(el, binding) {
        el.setAttribute('data-infiniteScrollDistance', binding.value);
    },
    update(el, binding) {
        el.setAttribute('data-infiniteScrollDistance', binding.value);
    },
};