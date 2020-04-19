const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development';
console.log(isDev)

module.exports = {
    target: 'web',
    entry: {
        index: path.join(__dirname, 'src/index.js'),
        //你需要引入的第三方库文件
        vendor: [
            'vue',
            // 'vuex',
            // 'vue-router',
            'element-ui'
        ],
    },
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
                test: /\.jsx$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                        }
                    }
                ]
            }, 
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                use: [
                    {
                        loader: 'url-loader', // 可以转换成base64代码，直接写在js里面，而不用生成文件
                        options: {
                            limit: 1024,
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
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
          }),
      ]
}