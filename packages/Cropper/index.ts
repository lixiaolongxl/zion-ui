import {App} from "vue"
import ZCropper from './src/index.vue'
// 为组件提供 install 安装方法，供按需引入
ZCropper.install = (Vue:App)=> {
    Vue.component(ZCropper.name, ZCropper)
}
  
  // 导出组件
export default ZCropper
