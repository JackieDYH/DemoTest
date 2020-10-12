module.exports = {
    // configureWebpack: {
    //     devtool: 'source-map',
    //     externals: {
    //         'zlplayer': 'zlplayer',
    //         'zlipcrtc': 'zlipcrtc',
    //         'EZUIKit': 'EZUIKit',
    //         'ZLRtcEngine': 'ZLRtcEngine',
    //     }
    // },
    lintOnSave: true,
    devServer: {
        proxy: {
            // proxy all requests starting with /api to jsonplaceholder
            '/i': {
                target: 'http://b.xinfu.info',
                // target: 'http://172.16.20.25:8080',
                ws: false,
                changeOrigin: true
              },
        }
    }
}