<template>
  <div class="z-button" :class="[`z-button-${type}`]">
      <span><slot></slot></span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'z-button',
  props: {
    type:{
      type:String,
      default:'default'
    }
  },
  setup(){
    
  }
});
</script>

