<template>
  <div id="pageQuiButton">
    <bootstrapNav/>
    <div class="btn-block">
      <div>
        <h4>Here is the BootstrapVue pre-defined Button</h4>
        <a href='https://bootstrap-vue.js.org/docs/components/button'>Refer: https://bootstrap-vue.js.org/docs/components/button</a>
      </div>
      <div class='btn-group'>
        <margin-left-right-6 variant="primary" class='margin-left-right-6'>Primary Button</margin-left-right-6>
        <margin-left-right-6 variant="danger" class='margin-left-right-6'>Danger Button</margin-left-right-6>
        <margin-left-right-6 variant="success" class='margin-left-right-6'>Success Button</margin-left-right-6>
        <margin-left-right-6 class='margin-left-right-6'>Common Button</margin-left-right-6>
        <margin-left-right-6 variant="outline-primary" class='margin-left-right-6'>Outline-Primary Button</margin-left-right-6>
      </div>
    </div>
    <div class='slot'><hr class="my-4"></div>
    <div class="btn-block">
      <div>
        <h4>Here is the Bootstrp pre-defined Button</h4>
        <a href='https://getbootstrap.com/docs/4.0/components/buttons/'>Refer: https://getbootstrap.com/docs/4.0/components/buttons/</a>
      </div>
      <div class="btn-group">
        <button type="button" class="margin-left-right-6 btn btn-primary">Primary</button>
        <button type="button" class="margin-left-right-6 btn btn-secondary">Secondary</button>
        <button type="button" class="margin-left-right-6 btn btn-success">Success</button>
        <button type="button" class="margin-left-right-6 btn btn-danger">Danger</button>
        <button type="button" class="margin-left-right-6 btn btn-warning">Warning</button>
        <button type="button" class="margin-left-right-6 btn btn-info">Info</button>
        <button type="button" class="margin-left-right-6 btn btn-light">Light</button>
        <button type="button" class="margin-left-right-6 btn btn-dark">Dark</button>
        <button type="button" class="margin-left-right-6 btn btn-link">Link</button>
      </div>
      <br/>
      <div class="btn-group">
        <button type="button" class="margin-left-right-6 btn btn-outline-primary">Primary</button>
        <button type="button" class="margin-left-right-6 btn btn-outline-secondary">Secondary</button>
        <button type="button" class="margin-left-right-6 btn btn-outline-success">Success</button>
        <button type="button" class="margin-left-right-6 btn btn-outline-danger">Danger</button>
        <button type="button" class="margin-left-right-6 btn btn-outline-warning">Warning</button>
        <button type="button" class="margin-left-right-6 btn btn-outline-info">Info</button>
        <button type="button" class="margin-left-right-6 btn btn-outline-light">Light</button>
        <button type="button" class="margin-left-right-6 btn btn-outline-dark">Dark</button>
      </div>
      <br/>
      <div class="btn-group">
        <button type="button" class="margin-left-right-6 btn btn-primary btn-lg">Large button</button>
        <button type="button" class="margin-left-right-6 btn btn-primary btn-sm">Small button</button>
        <a href="#" class="margin-left-right-6 btn btn-primary btn-lg active" role="button" aria-pressed="true">Primary link</a>
        <button type="button" class="margin-left-right-6 btn btn-lg btn-primary" disabled>Disabled button</button>
        <input class="margin-left-right-6 btn btn-primary" type="button" value="Input">
        <input class="margin-left-right-6 btn btn-primary" type="submit" value="Submit">
        <input class="margin-left-right-6 btn btn-primary" type="reset" value="Reset">
      </div>
    </div>
    <div class='slot'><hr class="my-4"></div>
    <div class="btn-block">
      <h4>Here is the Self pre-defined Button</h4>
      <div class='btn-group'>
        <qui-btn msg="Qui-Btn which can self define content" class="small margin-left-right-6" v-on:btnClickEvent="btnClickEvent1" ></qui-btn>
        <qui-btn-with-slot msg="Qui-Btn-With-Slot" class="small margin-left-right-6">
          <img slot="icon" class="ico" src="http://www.sclance.com/pngs/person-icon-png/person_icon_png_1008739.png" />
        </qui-btn-with-slot>
      </div>
    </div>
  </div>
</template>

<script>
import quiBtn from '../components/QuiButton.vue'
import quiBtnWithSlot from '../components/QuiButtonWithSlot.vue'
import bootstrapNav from '../components/BootstrapNav.vue'
export default {
  name: 'PageQuiButton',
  components: {
    'bootstrapNav': bootstrapNav,
    'qui-btn': quiBtn,
    'qui-btn-with-slot': quiBtnWithSlot
  },
  methods: { // 绑定事件的关键代码
    btnClickEvent1: function () {
      alert('你点击了组件的click:btnClickEvent1')
    }
  }
}
</script>
<style>
.btn-block{
  margin: 40px 0px;

}
.margin-left-right-6{
  margin: 0px 6px;
}
.btn-group{
  margin-top: 10px;
}
.slot{
  width: 70%;
  margin: 0 auto;
}
.ico{
  width: 25px;
  height: 25px;
}
</style>
