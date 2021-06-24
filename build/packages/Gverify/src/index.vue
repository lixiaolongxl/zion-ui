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
    },
    size:{
      type:Number,
      default:4
    },
    blend:{
      type:String,
      default:'blend'
    },
    iswire:{
      type:Boolean,
      default:false
    },
    isPoint:{
      type:Boolean,
      default:false
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
        size:this.size,
        width:this.width,
        height:this.height,
        blend:this.blend,
        iswire:this.iswire,
        isPoint:this.isPoint
    })
  },
  methods: {
    validate(value:string){
      if(this.verifyCode){
        return (this.verifyCode as any).validate(value)
      }
    }
  }
});
</script>

