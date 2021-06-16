<template>
    <div v-magnifier class="z-magnifier" @click="HandClick" :style="{
        width:width +'px',
        height:height +'px'
    }">
        <div class="z-magbox" :style="{
            width:magWidth +'px',
            height:magHeight +'px'
        }">
            <img class="mag-img" :style="{
                width:width +'px',
                height:height +'px'
            }" :src="imgUrl" alt="图片">
        </div>
        <div class="img-lk" >
            <img :style="{
        width:width +'px',
        height:height +'px'
    }" class="static-img"  :src="imgUrl" alt="图片">
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { magnifier } from '../../directives'
export default defineComponent({
  name: 'z-magnifier',
  directives: {
        magnifier,
  },
  props: {
    imgUrl:{
      type:String,
      default:'',
    },
    width:{
        type:Number,
        default:200,
    },
    height:{
        type:Number,
        default:200, 
    },
    magWidth:{
        type:Number,
        default:100, 
    },
    magHeight:{
        type:Number,
        default:100, 
    }
  },
  emits: ["linkClick"],
  setup(prop,{emit}){
        const HandClick = ():void=>{
            emit('linkClick',prop.imgUrl)
        }
        return {
            HandClick
        }
  }
});
</script>

