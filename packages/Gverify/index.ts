import {App} from "vue"
import ZGverify from './src/index.vue'

ZGverify.install = (Vue:App)=> {
    Vue.component(ZGverify.name, ZGverify)
}
// 导出组件
export default ZGverify
