<template>
  <button class="qui-btn" v-on:click="btnClickEvent">
    <span>{{msg}}</span>
  </button>
</template>

<script>
export default {
  // Method 1 to assign value of msg
  // data:function(){
  //   return {
  //     msg:'下载'
  //   }
  // }
  // Method 2 to open props of msg, so that value could assign outside
  props: {
    msg: {
      default: '下载'
    }
  }
}
</script>
