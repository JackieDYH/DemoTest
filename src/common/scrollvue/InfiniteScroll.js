/*
 * @version: 
 * @Description: file content
 * @Author: Jackie
 * @Date: 2021-06-15 11:22:13
 * @LastEditors: Jackie
 * @LastEditTime: 2021-06-15 16:37:45
 */

export default {
    bind(el, binding) {
        let target = el;
        if (el.getAttribute('data-scrollTarget')) {
            target = el.querySelector(el.getAttribute('data-scrollTarget'));
        }
        target.addEventListener('scroll', e => {
            const busy = el.getAttribute('data-infiniteScrollDisabled') ? false : true;
            const distance = el.getAttribute('data-infiniteScrollDistance')
                ? Number.parseInt(el.getAttribute('data-infiniteScrollDistance'), 10)
                : 100;
            if (!busy && e.target.scrollHeight - (e.target.scrollTop + e.target.clientHeight) < distance) {
                el.setAttribute('data-infiniteScrollDisabled', true);
                binding.value(e);
            }
        });
    },
};