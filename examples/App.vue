<template>
    <z-button >button</z-button>
    <z-button type="primary">button</z-button>
    <z-button type="success">button</z-button>
    <z-button type="warning">button</z-button>
    <z-button type="danger">button</z-button>
    <z-button type="info">button</z-button>
    <br>
    <div style="margin:0 auto">
      <z-magnifier 
      link="www.baidu.com"
      :imgUrl="data.imgUrl"
      :width="data.width"
      :height="data.height"
      :magWidth="data.magWidth"
      :magHeight="data.magHeight"
      @linkClick="HandClick"
    ></z-magnifier>
    </div>
    
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
interface magnifierprop {
  imgUrl:string;
  width:number;
  height:number;
  [propName: string]: any; //新加不约束的属性
}
export default defineComponent({
  name: 'App',
  setup(){
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
    return {
      data,
      HandClick
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
