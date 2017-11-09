<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">Exhibition</span>
      </div>
    </header>
    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">Exhibition</span>
      <nav class="mdl-navigation">
        <router-link class="mdl-navigation__link" to="/" @click.native="hideMenu">Home</router-link>
        <router-link class="mdl-navigation__link" to="/overview" @click.native="hideMenu">Calendar - Overview</router-link>
        <router-link class="mdl-navigation__link" to="/board" @click.native="hideMenu">Message Board</router-link>
        <router-link class="mdl-navigation__link" to="/about" @click.native="hideMenu">About</router-link>
      </nav>
    </div>
    <main class="mdl-layout__content">
      <div class="page-content">
        <div v-if="$root.loading" class="mdl-spinner mdl-js-spinner is-active"></div>
        <router-view v-else></router-view>
      </div>
    </main>
  </div>
</template>

<script>
require('material-design-lite')
export default {
  name: 'app',
  methods: {
    hideMenu: function () {
      document.getElementsByClassName('mdl-layout__drawer')[0].classList.remove('is-visible')
      document.getElementsByClassName('mdl-layout__obfuscator')[0].classList.remove('is-visible')
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
  @import url('https://code.getmdl.io/1.2.1/material.blue-red.min.css');

.page-content {
  margin: 0 auto;
  max-width: 1440px;
  text-align: center;
}

.page-content > * {
  text-align: left;
} 

img {
  width: 100%;
}
</style>
