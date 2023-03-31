import modal from './modal'
import cache from "./cache"
export default {
  install(Vue){
    // 模态框对象
    Vue.prototype.$modal = modal
    // 缓存对象
    Vue.prototype.$cache = cache
  }
}
