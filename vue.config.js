const {defineConfig} = require('@vue/cli-service')
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir)
}

const CompressionPlugin = require('compression-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

// 网页标题
const name = process.env.VUE_APP_TITLE || '网页标题'

// 端口
const port = process.env.port || process.env.npm_config_port || 80 // 端口

module.exports = defineConfig({
  // 对所有node_modules进行转译
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  outputDir: 'dist',
  // 项目打包后，静态资源会放在这个文件夹下
  assetsDir: 'static',
  // 是否开启eslint保存检测
  lintOnSave: process.env.NODE_ENV === 'development',
  // 生产环境 sourceMap
  productionSourceMap: false,
  // devServer
  devServer: {
    port: port,
    open: true,
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: `https://vue.ruoyi.vip/prod-api/`,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    },
    allowedHosts: 'all',
    // disableHostCheck:true
  },
  css: {
    loaderOptions: {
      sass: {
        // sass有4种输出格式 :nested 嵌套 :expand 扩展 :compact :compressed
        // 默认 nested 已阅读，有时无法识别（报错） 修改为 :expand
        sassOptions: {outputStyle: "expanded"}
      }
    }
  },
  // 传统webpack配置，进行一些简单配置
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    plugins: [
      // 使用gzip解压缩静态文件
      new CompressionPlugin({
        cache: false,                  // 不启用文件缓存
        test: /\.(js|css|html)?$/i,     // 压缩文件格式
        filename: '[path].gz[query]',   // 压缩后的文件名
        algorithm: 'gzip',               // 使用gzip压缩
        minRatio: 0.8                   //压缩率小于1才会压缩
      }),
      // vue2需要安装版本6
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, './public/robots.txt'), //防爬虫文件
            to: './', //到根目录下
            force: true
          }
        ]
      })
    ]
  },
  // vue-cli 封装配置，支持链式操作  允许对内部的 webpack 配置进行更细粒度的修改。
  chainWebpack(config) {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')


    // 非开发环境配置
    config
      .when(process.env.NODE_ENV !== 'development',
        config => {

          // runtimeChunk优化
          config
            .plugin('ScriptExtHtmlWebpackPlugin')
            .after('html')
            .use('script-ext-html-webpack-plugin', [{
              inline: /runtime\..*\.js$/
            }])
            .end()

          // 单独打包一些不常改变的库
          config.optimization.splitChunks({
            chunks: 'all',
            cacheGroups: {
              libs: {
                name: 'chunk-libs',
                test: /[\\/]node_modules[\\/]/,
                priority: 10,
                chunks: 'initial' // only package third parties that are initially dependent
              },
              elementUI: {
                name: 'chunk-elementUI', // split elementUI into a single package
                priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
              },
              commons: {
                name: 'chunk-commons',
                test: resolve('src/components'), // can customize your rules
                minChunks: 3, //  minimum common number
                priority: 5,
                reuseExistingChunk: true
              }
            }
          })

          config.optimization.runtimeChunk('single')

        })
  }
})
