import {App} from "vue"
import ZEllipsis from './src/index.vue'
// 为组件提供 install 安装方法，供按需引入
ZEllipsis.install = (Vue:App)=> {
    Vue.component(ZEllipsis.name, ZEllipsis)
}
  
  // 导出组件
export default ZEllipsis
