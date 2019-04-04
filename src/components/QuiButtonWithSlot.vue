<template>
  <button class="qui-btn" v-on:click="btnClickEvent">
    <slot name="icon"></slot>
    <span>{{msg}}</span>
  </button>
</template>

<script>
export default {
  props: {
    msg: {
      default: '下载'
    }
  },
  //  Assign general method inside component
  methods: {
    btnClickEvent: function () {
      alert('先弹出默认的文案')
      this.$emit('btnClickEvent')
    }
  }
}
</script>
