/*
 * @version: 
 * @Description: file content
 * @Author: Jackie
 * @Date: 2021-06-15 10:49:54
 * @LastEditors: Jackie
 * @LastEditTime: 2021-06-15 13:58:33
 */
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  "plugins": [
    // 样式是否也按需加载
    ["import", {"libraryName": "vant","libraryDirectory": "es","style": true},"vant"]
  ]
};