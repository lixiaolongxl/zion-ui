// 导入button组件
import ZButton from './Button'
import ZMagnifier from './Magnifier'

// 组件列表
const components = [
    ZButton,
    ZMagnifier
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，那么所有的组件都会被注册
// const install = function (Vue) {
//   // 判断是否安装
//   if (install.installed) return
//   // 遍历注册全局组件
//   components.map(component => Vue.component(component.name, component))
// }
const install = (app: any) => { 
    components.map(component => {
      app.use(component)
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
  ZMagnifier
}
export default {
    install
  }