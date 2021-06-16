/*
 * @version: 
 * @Description: file content
 * @Author: Jackie
 * @Date: 2021-06-15 14:37:17
 * @LastEditors: Jackie
 * @LastEditTime: 2021-06-16 18:44:37
 */
const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir)
}

/*一 注意sass，scss，less的配置 px2rem*/
// const px2rem = require('postcss-px2rem')
// const postcss = px2rem({
//     remUnit: 75   //基准大小 baseSize，需要和rem.js中相同
// })
module.exports = {
    //根据环境build打包到对于路径
    outputDir: process.env.outputDir,
    productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
    /*一 注意sass，scss，less的配置 px2rem*/
    // productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
    // css: {
    //     loaderOptions: {
    //         postcss: {
    //             plugins: [
    //                 postcss
    //             ]
    //         }
    //     }
    // },

    /*二 px转rem的配置 postcss-plugin-px2rem插件 可以设置忽略文件*/
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-plugin-px2rem')({
                        rootValue: 100, //换算基数， 默认100  ，这样的话把根标签的字体规定为1rem为50px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
                        // unitPrecision: 5, //允许REM单位增长到的十进制数字。
                        //propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
                        // propBlackList: [], //黑名单
                        exclude: /(node_module)/,  //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)/ 。如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
                        // selectorBlackList: [], //要忽略并保留为px的选择器
                        // ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
                        // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
                        mediaQuery: false,  //（布尔值）允许在媒体查询中转换px。
                        minPixelValue: 3 //设置要替换的最小像素值(3px会被转rem)。 默认 0
                    }),
                ]
            }
        }
    },

    configureWebpack: config => {
        //生产环境取消 console.log
        if (process.env.NODE_ENV === 'production') {
            // 直接修改webpack的配置
            config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
        }
    },
    chainWebpack: (config) => {
        // 配置路径
        config.resolve.alias
            .set('@utils', resolve('./src/utils'))


        // 配置 webpack 识别 markdown 为普通的文件
        config.module
            .rule('markdown')
            .test(/\.md$/)
            .use()
            .loader('file-loader')
            .end()
    },

    lintOnSave: true,
    devServer: {
        proxy: {
            // proxy all requests starting with /api to jsonplaceholder
            '/i': {
                target: 'http://b.xinfu.info',
                // target: 'http://172.16.20.25:8080',
                ws: false,
                changeOrigin: true,
                // pathRewrite: {
                //     '/jeecg-boot': ''  //默认所有请求都加了jeecg-boot前缀，需要去掉
                // }
            },
        }
    }
}