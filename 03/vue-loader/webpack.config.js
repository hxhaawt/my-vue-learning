
// const path = require('path');

module.exports = {
    entry: './main.js',
    output: {
        path: __dirname,
        filename: 'build.js'
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
    }

};








