const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HTMLPlugin = require('html-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development';
console.log(isDev)

const config = {
    target: 'web',
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }, 
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                use: [
                    {
                        loader: 'url-loader', // 可以转换成base64代码，直接写在js里面，而不用生成文件
                        options: {
                            limit: 10000,
                            name: '[name]-xc.[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        // 使用vue框架时，一定要用以下这个webpack的plugin
        // 在里面定义一个变量
        // 作用：可以在全局调用变量来判断环境，变量为：process.env.NODE_ENV 返回结果为"development" or "production"(双引号不可省略)
        // 这里调用了webpack插件，所以需要引入一下
        new webpack.DefinePlugin({
          'process.env': {
            // 判断是否isDev，若是，则为development；若不是，则为production
            NODE_ENV: isDev ? '"development"' : '"production"' 
          }
        }),
        new VueLoaderPlugin(),
        new HTMLPlugin()
      ]
}


if (isDev) {
    // 在config上加一个devServer配置
    config.devServer = {
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
    config.plugins.push(
        // 启动热更新功能插件
        new webpack.HotModuleReplacementPlugin(),
        // 帮助减少不需要的信息展示
        new webpack.NoEmitOnErrorsPlugin()
      )
  }

module.exports = config;
