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
    <br>
    <div style="height:500px">
      <z-cropper 
      	ref="cropper"
        v-if="false"
		:img="option.img"
		:outputSize="option.size"
		:outputType="option.outputType"
		:info="true"
		:full="option.full"
		:canMove="option.canMove"
		:canMoveBox="option.canMoveBox"
		:fixedBox="option.fixedBox"
		:original="option.original"
		:autoCrop="option.autoCrop"
		:autoCropWidth="option.autoCropWidth"
		:autoCropHeight="option.autoCropHeight"
		:centerBox="option.centerBox"
		:high="option.high"
		:infoTrue="option.infoTrue"
		:maxImgSize="option.maxImgSize"
		@cropMoving="cropMoving"
		:enlarge="option.enlarge"
		:mode="option.mode"
		:limitMinSize="option.limitMinSize"
    ></z-cropper>


    <z-ellipsis  style="width: 140px;">住在我心里孤独的 孤独的海怪 痛苦之王 开始厌倦 深海的光 停滞的海浪</z-ellipsis>
    </div>
    
    
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
   let option = reactive({
        img: "https://lixiaolongxl.github.io/img/logo.jpeg",
        size: 1,
        full: false,
        outputType: "jpeg",
        canMove: true,
        fixedBox: false,
        original: false,
        canMoveBox: true,
        autoCrop: true,
        // 只有自动截图开启 宽度高度才生效
        autoCropWidth: 200,
        autoCropHeight: 150,
        centerBox: false,
        high: false,
        cropData: {},
				enlarge: 1,
        mode: 'contain',
        maxImgSize: 3000,
        limitMinSize: [100, 120]
   })
   const cropMoving = (data:any)=>{
     option.cropData = data;
   }
    return {
      data,
      gverify,
      HandClick,
      jiaoyan,
      option,
      cropMoving
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
