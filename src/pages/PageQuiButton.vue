<template>
  <div id="pageQuiButton">
    <bootstrapNav/>
    <div class="btn-block">
      <div>
        <h4>Here is the BootstrapVue pre-defined Button</h4>
        <a href='https://bootstrap-vue.js.org/docs/components/button'>Refer: https://bootstrap-vue.js.org/docs/components/button</a>
      </div>
      <div class='btn-group'>
        <b-button variant="primary" class='b-button'>Primary Button</b-button>
        <b-button variant="danger" class='b-button'>Danger Button</b-button>
        <b-button variant="success" class='b-button'>Success Button</b-button>
        <b-button class='b-button'>Common Button</b-button>
        <b-button variant="outline-primary" class='b-button'>Outline-Primary Button</b-button>
      </div>
    </div>
    <div class='slot'><hr class="my-4"></div>
    <div class="btn-block">
      <div>
        <h4>Here is the Bootstrp pre-defined Button</h4>
        <a href='https://getbootstrap.com/docs/4.0/components/buttons/'>Refer: https://getbootstrap.com/docs/4.0/components/buttons/</a>
      </div>
      <div class="btn-group">
        <button type="button" class="b-button btn btn-primary">Primary</button>
        <button type="button" class="b-button btn btn-secondary">Secondary</button>
        <button type="button" class="b-button btn btn-success">Success</button>
        <button type="button" class="b-button btn btn-danger">Danger</button>
        <button type="button" class="b-button btn btn-warning">Warning</button>
        <button type="button" class="b-button btn btn-info">Info</button>
        <button type="button" class="b-button btn btn-light">Light</button>
        <button type="button" class="b-button btn btn-dark">Dark</button>
        <button type="button" class="b-button btn btn-link">Link</button>
      </div>
      <br/>
      <div class="btn-group">
        <button type="button" class="b-button btn btn-outline-primary">Primary</button>
        <button type="button" class="b-button btn btn-outline-secondary">Secondary</button>
        <button type="button" class="b-button btn btn-outline-success">Success</button>
        <button type="button" class="b-button btn btn-outline-danger">Danger</button>
        <button type="button" class="b-button btn btn-outline-warning">Warning</button>
        <button type="button" class="b-button btn btn-outline-info">Info</button>
        <button type="button" class="b-button btn btn-outline-light">Light</button>
        <button type="button" class="b-button btn btn-outline-dark">Dark</button>
      </div>
      <br/>
      <div class="btn-group">
        <button type="button" class="b-button btn btn-primary btn-lg">Large button</button>
        <button type="button" class="b-button btn btn-primary btn-sm">Small button</button>
        <a href="#" class="b-button btn btn-primary btn-lg active" role="button" aria-pressed="true">Primary link</a>
        <button type="button" class="b-button btn btn-lg btn-primary" disabled>Disabled button</button>
        <input class="b-button btn btn-primary" type="button" value="Input">
        <input class="b-button btn btn-primary" type="submit" value="Submit">
        <input class="b-button btn btn-primary" type="reset" value="Reset">
      </div>
    </div>
    <div class='slot'><hr class="my-4"></div>
    <div class="btn-block">
      <h4>Here is the Self pre-defined Button</h4>
      <div class='btn-group'>
        <qui-btn msg="Qui-Btn which can self define content" class="small"></qui-btn>
      </div>
    </div>
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
<style>
.btn-block{
  margin: 40px 0px;

}
.b-button{
  margin: 0px 6px;
}
.btn-group{
  margin-top: 10px;
}
.slot{
  width: 70%;
  margin: 0 auto;
}
</style>
