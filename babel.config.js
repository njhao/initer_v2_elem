module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  'env':{
    'development':{
      // babel-plugin-dynamic-import-node plugin 将所有的 import 转换问 require
      // 当有大量页面时，可以显著提升热更新的速度
      'plugins': ['dynamic-import-node']
    }
  }
}
