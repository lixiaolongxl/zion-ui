import ZButton from './src/index.vue'


// 为组件提供 install 安装方法，供按需引入
ZButton.install = (Vue:any)=> {
    Vue.component(ZButton.name, ZButton)
}
  
  // 导出组件
export default ZButton
