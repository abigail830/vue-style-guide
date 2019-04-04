<template>
  <div>
    <bootstrapNav/>
    <div class='container'>
      <div class='slogon'>
          <b-jumbotron header="Style Guide base on Vue" lead="Referenced Bootstrap and BootstrapVue">
    <!-- <p>For more information visit website</p> -->
    <b-button variant="info" href="#/color">Let's start from Color</b-button>
  </b-jumbotron>
      </div>
    </div>
  </div>
</template>

<script>
import bootstrapNav from '../components/BootstrapNav.vue'
export default {
  name: 'Index',
  components: {
    'bootstrapNav': bootstrapNav
  }
}
</script>

<style scoped>
 .slogon{
   margin-top: 50px;
 }
</style>
