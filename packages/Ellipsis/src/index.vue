<template>
    <span class="z-ellipsis"  v-if="native" :title="slotsvalue">
        <slot></slot>
    </span>
    <div v-else class="popbox" @mouseover="mouseenter" @mouseout="mouseout">
        <p v-show="show">{{slotsvalue}}</p>
        <span  class="z-ellipsis">
            <slot></slot>        
        </span>
    </div>
    
</template>

<script lang="ts">
import { defineComponent,h, ref, PropType, computed, mergeProps } from 'vue';

export default defineComponent({
    name: 'z-ellipsis',
    props: {
        native:{
            type:Boolean,
            default:false
        }
    },
    setup(props, {slots}){
        const {native} = props
        let show = ref(false)
        const mouseenter = function(){
            show.value = true;
        }
        const mouseout= function(){
             show.value = false;
        }
        // debugger
        return {
            slotsvalue:(slots as any).default()[0].children,
            native,
            show,
            mouseenter,
            mouseout
        }
    }
});
</script>

