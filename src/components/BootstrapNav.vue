<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">StyleGuide</b-navbar-brand>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#/color" v-bind:active="tab === 1" v-on:click="tab = 1">Color</b-nav-item>
          <b-nav-item href="#/btn" v-bind:active="tab === 2" v-on:click="tab = 2">Button</b-nav-item>
          <b-nav-item href="#/list" v-bind:active="tab === 3" v-on:click="tab = 3">List</b-nav-item>
          <b-nav-item href="#/nav" v-bind:active="tab === 4" v-on:click="tab = 4">Nav</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<style>
.b-navbar-brand{
  font-weight: bold;
  font-size: 200% !important;
}

.b-nav-item > .active {
  color: aqua!important;
  background-color: chartreuse;
}
</style>
