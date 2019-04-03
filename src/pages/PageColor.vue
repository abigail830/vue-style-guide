<template>
  <div>
    <bootstrapNav/>
    <h1>Color</h1>
  </div>
</template>

<script>
import bootstrapNav from '../components/BootstrapNav.vue'
export default {
  name: 'PageColor',
  components: {
    'bootstrapNav': bootstrapNav
  }
}
</script>
<style>
@import '../assets/css/color.scss';;
</style>
