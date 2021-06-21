<template>
<div>
  <z-button >button</z-button>
    <z-button type="primary">button</z-button>
    <z-button type="success">button</z-button>
    <z-button type="warning">button</z-button>
    <z-button type="danger">button</z-button>
    <z-button type="info">button</z-button>
    <br>
    <z-magnifier 
      link="www.baidu.com"
      :imgUrl="data.imgUrl"
      :width="data.width"
      :height="data.height"
      :magWidth="data.magWidth"
      :magHeight="data.magHeight"
      @linkClick="HandClick"
    ></z-magnifier>
    <br>
    <z-gverify ref="gverify" ></z-gverify>
    <div><button @click="jiaoyan">校验</button></div>
    
</div>
    

    
      
    
    
</template>

<script lang="ts">
import { defineComponent, reactive,ref } from 'vue';
interface magnifierprop {
  imgUrl:string;
  width:number;
  height:number;
  [propName: string]: any; //新加不约束的属性
}

export default defineComponent({
  name: 'App',
  setup(){
    const gverify = ref(null) // 通过 ref 绑定子组件
    const data = reactive<magnifierprop>({
      imgUrl:'https://lixiaolongxl.github.io/img/logo.jpeg',
      width:300,
      height:300,
      magWidth:100,
      magHeight:100,
    })
    const HandClick = (linkUrl:string)=>{
      debugger
    }
    const jiaoyan = ()=>{
    
      let a = (gverify as any).value.validate('123')
      console.log(a);
    }
   
    return {
      data,
      gverify,
      HandClick,
      jiaoyan
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
