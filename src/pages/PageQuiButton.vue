<template>
  <div id="pageQuiButton">
    <qui-btn msg="确定" class="small"></qui-btn>
  </div>
</template>

<script>
import quiBtn from '../components/QuiButton.vue'
export default {
  name: 'PageQuiButton',
  components: {
    'qui-btn': quiBtn
  }
}
</script>
