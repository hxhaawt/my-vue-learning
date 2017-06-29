
const path = require('path');
let htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:{
        build: "./main.js"
    },
    output: {
        // path: __dirname,
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    },

    module:{
        loaders:[
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query:{
                    presets: ['es2015']
                }
            }
        ]
    },

    plugins: [
        new htmlWebpackPlugin({
            // html源文件 + bundle.js文件生成 bundle.html文件
            // 输出的文件名称 默认index.html 可以带有子目录
            filename: 'build.html',
            // 源文件
            template: 'index.html',
            // 注入资源在 head部分，不写就是在body部分
            // 加入js文件
            //inject: true,
            // inject:'head',
            title:'vue+router',
            chunks:['build'],//指定chunks 为 build 的js
        })
    ]

};








