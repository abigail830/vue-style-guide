<template>
  <div id="pageQuiButton">
    <bootstrapNav/>
    <qui-btn msg="确定" class="small"></qui-btn>
  </div>
</template>

<script>
import quiBtn from '../components/QuiButton.vue'
import bootstrapNav from '../components/BootstrapNav.vue'
export default {
  name: 'PageQuiButton',
  components: {
    'bootstrapNav': bootstrapNav,
    'qui-btn': quiBtn
  },
  methods: { // 绑定事件的关键代码
    btnClickEvent: function () {
      alert(this.msg)
    }
  }
}
</script>
