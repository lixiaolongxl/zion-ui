import {App} from "vue"
import ZMagnifier from './src/index.vue'


// 为组件提供 install 安装方法，供按需引入
ZMagnifier.install = (Vue:App)=> {
    Vue.component(ZMagnifier.name, ZMagnifier)
}
  
  // 导出组件
export default ZMagnifier
