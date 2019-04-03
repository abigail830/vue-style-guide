<template>
  <button class="qui-btn" v-on:click="btnClickEvent">
    <span>{{msg}}</span>
  </button>
</template>

<script>
export default {
  props: {
    msg: {
      default: '下载'
    }
  }
}
</script>
