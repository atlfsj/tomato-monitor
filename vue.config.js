module.exports = {
    assetsDir: 'assets',
    publicPath: '/tomato-monitor/dist/',
    lintOnSave: false, // eslint-loader 是否在保存的时候检查
}
/*
const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    /*
    publicPath: './',
    devServer: {
        proxy: {
            '/api': {
                target: 'https://c.m.163.com/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
            '/txApi': {
                target: 'https://api.inews.qq.com/',
                changeOrigin: true,
                pathRewrite: {
                    '^/txApi': ''
                }
            },
            '/baidu': {
                target: 'https://aip.baidubce.com/',
                changeOrigin: true,
                pathRewrite: {
                    '^/baidu': ''
                },
            }
        }
    },
    lintOnSave: false, // eslint-loader 是否在保存的时候检查
    productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
    filenameHashing: true, //文件hash
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    },
    devServer: {
        proxy: {
            '/result': {
                target: 'http://localhost:3000', // 后端服务地址
                changeOrigin: true,
            }
        }
    }
}
*/
