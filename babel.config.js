module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  "plugins": [
    // 样式是否也按需加载
    ["import", { "libraryName": "vxe-table", "style": true }],
    // ["import", {"libraryName": "vant","libraryDirectory": "es","style": true}]
  ]
};
