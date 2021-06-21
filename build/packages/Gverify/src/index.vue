<template>
  <div id="z-gverify-img-code" :style="{width:width+'px',height:height+'px'}" class="z-gverify"></div>
</template>

<script lang="ts">
import { defineComponent,onMounted,reactive,toRefs } from 'vue';
import GVerify from './gverify'
export default defineComponent({
  name: 'z-gverify',
  props: {
    width:{
      type:Number,
      default:120
    },
    height:{
        type:Number,
        default:30
    }
  },
  data(){
    return {
      verifyCode:null
    }
  },
  mounted () {
    (this.verifyCode as any) = new GVerify({
        id:'z-gverify-img-code',
        size:4,
        width:this.width,
        height:this.height,
        blend:'number',
        iswire:false,
        isPoint:false
    })
  },
  methods: {
    validate(value:string){
      if(this.verifyCode){
        return (this.verifyCode as any).validate(value)
      }
    }
  }
  // emits: ["validate"],
  // setup(prop){
  //   let verifyCode = reactive({})
  //   let code = ''
  //   onMounted(()=>{
  //     verifyCode = new GVerify({
  //       id:'z-gverify-img-code',
  //       width:prop.width,
  //       height:prop.height,
  //       blend:'number',
  //       iswire:false,
  //       isPoint:false,
  //     })
  //     code = (verifyCode as any).options.code
  //     // debugger;
  //   })
  //   return {
  //     verifyCode,
  //     code:code
  //   }
  // }
});
</script>

