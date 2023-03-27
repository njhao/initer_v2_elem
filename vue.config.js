const { defineConfig } = require('@vue/cli-service')
const path = require("path");

function resolve(dir){
  return path.join(__dirname,dir)
}

// 网页标题
const name = process.env.VUE_APP_TITLE || '网页标题'

// 端口
const port = process.env.port || process.env.npm_config_port || 80 // 端口

module.exports = defineConfig({
  transpileDependencies: true
})
