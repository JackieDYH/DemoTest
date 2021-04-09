# vedio-ts 202010

* 测试小demo
- 视频
- 地图
- echarts
- [轮播图组件](https://www.npmjs.com/package/wxp-swiper)
- [ant-design-vue 组件库](https://www.antdv.com/docs/vue/getting-started-cn/)
- [animate.css 动画库](https://animate.style/#usage)
- 轮播图组件
```
npm install vue-awesome-swiper@3 --save-dev

https://www.swiper.com.cn/
https://github.surmon.me/vue-awesome-swiper/
```
- 百度地图组件
```
npm install vue-baidu-map --save
```
- npm install --save vue-pdf
- [pdf.js](https://jackiehao.blog.csdn.net/article/details/109453645) pdf组件 静态文件

### 图片渐进加载
- npm install progressive-image --save
### 图片懒加载
- npm install vue-lazyload --save-dev

### antv/g2
-  npm i @antv/g2 --save

### 图片放大预览
- npm install v-viewer --save

### [web3.js](https://web3.tryblockchain.org/web3-js-in-action.html)
- npm install web3

### px转rem 前者方便设置忽略文件
- npm i postcss-plugin-px2rem  --save -dev
- npm install postcss-px2rem --save -dev

### en转zh 语言转换
- npm install vue-i18n

### 剪贴板
- npm install v-clipboard --save

### vant库
- npm i vant -S


## 环境设置
```
NODE_ENV  src中使用VUE_APP_NODE_ENV

在根目录添加.env.xxx文件，配置所有情况下都会用到的配置

环境变量的使用
设置完环境变量之后就可以在我们的项目中使用这两个变量了。不过还需要注意的是在项目的不同地方使用，限制也不一样。

在项目中，也就是src中使用环境变量的话，必须以VUE_APP_开头。例如我们可以在main.js中直接输出：console.log(process.env.VUE_APP_SECRET)
在webpack配置中使用，没什么限制，可以直接通过process.env.XXX来使用
在public/index.html中使用的：分三类：（没怎么用过）
	<%= VAR %> 用于非转换插值  例如：`<link rel="shortcut icon" href="<%= BASE_URL %>favicon.ico">`
	<%- VAR %> 用于HTML转义插值
	<% expression %> 用于JavaScript控制流  
	
使用
	"serve:dev": "vue-cli-service serve --mode dev",
	"serve:prod": "vue-cli-service serve --mode prod",
	"serve:beta": "vue-cli-service serve --mode beta",
	"build:dev": "vue-cli-service build --mode devbuild",
	"build:prod": "vue-cli-service build --mode prodbuild",
	"build:beta": "vue-cli-service build --mode betabuild"
```

--------------------------------------

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
