import {App} from "vue"
// 导入button组件
import ZButton from './Button'
import ZMagnifier from './Magnifier'
import ZGverify from './Gverify'

// 组件列表
const components = [
    ZButton,
    ZMagnifier,
    ZGverify
]
const install = (app:App) => { 
    components.map(component => {
      app.component(component.name, component)
    })
  }
// 判断是否是直接引入文件
// window.Vue = window.Vue || {};
if (typeof window !== 'undefined' && (window as any).Vue ) {
  install((window as any).Vue)
}

export  {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  ZButton,
  ZMagnifier,
  ZGverify
}
export default {
  install
}