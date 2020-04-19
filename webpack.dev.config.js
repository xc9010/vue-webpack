const path = require('path')
const webpack = require('webpack')
const baseConfig = require('./webpack.config')

module.exports = Object.assign({}, baseConfig, {
        // 在config上加一个devServer配置
        devServer: {
            // 启动的服务端口
            port: 8080,
            // 通过localhost或IP进行访问
            host: '0.0.0.0',
            // 若编译过程中有错误，显示到网页上,便于定位错误
            overlay: {
              errors: true,
            },
              //热加载，功能：只渲染所改组件的页面效果，不会全部刷新，其他页面数据依然会存在
              hot: true,
              // 运行时自动打开页面，但修改时会总是打开，不太好，所以看具体业务需要
              // open: true
              // 单页应用会做很多前端路由，请求进来的地址不一定是index.html。
              // historyFallback能将所有没有做映射的地址都映射到一个入口：index.html中去。
              // 课程中只是提到这个功能，没有讲详细配置
              // historyFallback: {
              // }
          },
          // 加插件，push一个新的webpack plugin
          //下面是不刷新更新内容
        plugins: [
            ...baseConfig.plugins,
            // 启动热更新功能插件
            new webpack.HotModuleReplacementPlugin(),
            // 帮助减少不需要的信息展示
            new webpack.NoEmitOnErrorsPlugin()
        ]
})