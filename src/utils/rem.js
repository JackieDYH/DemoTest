/*
 * @version: 
 * @Description: file content
 * @Author: Jackie
 * @Date: 2021-06-16 18:19:33
 * @LastEditors: Jackie
 * @LastEditTime: 2021-06-17 11:05:43
 */
// 基准大小
const baseSize = 100;
// 设置 rem 函数
// function setRem () {
//   // 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。
//   const scale = document.documentElement.clientWidth / 750;
//   // 设置页面根节点字体大小
//   document.documentElement.style.fontSize = (baseSize * Math.min(scale, 2)) + 'px';
// }

function setRem(baseWidth = 750) {
  const dpr = window.devicePixelRatio;
  const currentWidth = document.documentElement.clientWidth;
  let remSize = 0;
  let scale = 0;
  scale = currentWidth / baseWidth;
  remSize = baseWidth / 10;
  remSize = remSize * scale;
  document.documentElement.style.fontSize = remSize + 'px';
  document.documentElement.setAttribute('data-dpr', `${dpr}`);
}

// 初始化
setRem()
// 改变窗口大小时重新设置 rem
window.onresize = function () {
  setRem();
}