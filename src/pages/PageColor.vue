<template>
  <div>
    <bootstrapNav/>
    <div class="container">
      <div>
        <h4>Here is the class pre-defined for color and background-color:</h4>
        <a href='http://chir.ag/projects/name-that-color'>naming referenced: http://chir.ag/projects/name-that-color</a>
      </div>
  <div class="row">
    <div class="col-sm bold">
      <b-card>
        <b-card-text>Champagne</b-card-text>
        <b-button href="#" variant="outline-light" class='Champagne-bg'>#FBE0CE</b-button>
      </b-card>
    </div>
    <div class="col-sm bold">
      <b-card>
        <b-card-text>Manhattan</b-card-text>
        <b-button href="#" variant="outline-light" class='Manhattan-bg'>#F2BA97</b-button>
      </b-card>
    </div>
    <div class="col-sm bold">
      <b-card>
        <b-card-text>BrilliantRose</b-card-text>
        <b-button href="#" variant="outline-light" class='BrilliantRose-bg'>#EE5BA0</b-button>
      </b-card>
    </div>
    <div class="col-sm bold">
      <b-card>
        <b-card-text>Plum</b-card-text>
        <b-button href="#" variant="outline-light" class='Plum-bg'>#702269</b-button>
      </b-card>
    </div>
    <div class="col-sm bold">
      <b-card>
        <b-card-text>MaroonFlush</b-card-text>
        <b-button href="#" variant="outline-light" class='MaroonFlush-bg'>#B51B58</b-button>
      </b-card>
    </div>
    <div class="col-sm bold">
      <b-card>
        <b-card-text>AlizarinCrimson</b-card-text>
        <b-button href="#" variant="outline-light" class='AlizarinCrimson-bg'>#ED312F</b-button>
      </b-card>
    </div>
  </div>
  <div class="row">
    <div class="col-sm bold">
      <b-card>
        <b-card-text>Lochmara</b-card-text>
        <b-button href="#" variant="outline-light" class='Lochmara-bg'>#0078BF</b-button>
      </b-card>
    </div>
    <div class="col-sm bold">
      <b-card>
        <b-card-text>RobinsEggBlue</b-card-text>
        <b-button href="#" variant="outline-light" class='RobinsEggBlue-bg'>#00BCCD</b-button>
      </b-card>
    </div>
    <div class="col-sm bold">
      <b-card>
        <b-card-text>Bermuda</b-card-text>
        <b-button href="#" variant="outline-light" class='Bermuda-bg'>#7DCED5</b-button>
      </b-card>
    </div>
    <div class="col-sm bold">
      <b-card>
        <b-card-text>Jade</b-card-text>
        <b-button href="#" variant="outline-light" class='Jade-bg'>#00AA5b</b-button>
      </b-card>
    </div>
    <div class="col-sm bold">
      <b-card>
        <b-card-text>Olivine</b-card-text>
        <b-button href="#" variant="outline-light" class='Olivine-bg'>#85B880</b-button>
      </b-card>
    </div>
    <div class="col-sm bold">
      <b-card>
        <b-card-text>EarlsGreen</b-card-text>
        <b-button href="#" variant="outline-light" class='EarlsGreen-bg'>#BDBD32</b-button>
      </b-card>
    </div>
  </div>
  <div class="row">
    <div class="col-sm bold">
      <b-card>
        <b-card-text>Gorse</b-card-text>
        <b-button href="#" variant="outline-light" class='Gorse-bg'>#FFF350</b-button>
      </b-card>
    </div>
    <div class="col-sm bold">
      <b-card>
        <b-card-text>Jaffa</b-card-text>
        <b-button href="#" variant="outline-light" class='Jaffa-bg'>#F58A33</b-button>
      </b-card>
    </div>
    <div class="col-sm bold">
      <b-card>
        <b-card-text>Toast</b-card-text>
        <b-button href="#" variant="outline-light" class='Toast-bg'>#A17861</b-button>
      </b-card>
    </div>
    <div class="col-sm bold">
      <b-card>
        <b-card-text>IrishCoffee</b-card-text>
        <b-button href="#" variant="outline-light" class='IrishCoffee-bg'>#5F3C25</b-button>
      </b-card>
    </div>
    <div class="col-sm bold">
      <b-card>
        <b-card-text>Jumbo</b-card-text>
        <b-button href="#" variant="outline-light" class='Jumbo-bg'>#808184</b-button>
      </b-card>
    </div>
    <div class="col-sm bold">
      <b-card>
        <b-card-text>Gallery</b-card-text>
        <b-button href="#" variant="outline-light" class='Gallery-bg'>#EEEEEE</b-button>
      </b-card>
    </div>
  </div>
</div>
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
@import '../assets/css/color.scss';
@import '../assets/css/bgColor.scss';
@import '../assets/css/common.scss';
.container{
  padding-top: 40px;
  width: 100%;
  text-align: center;
}
.row{
  margin: 20px 0px;
}
</style>
