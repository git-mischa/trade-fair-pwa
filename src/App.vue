<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">Trade-Fair</span>
      </div>
    </header>
    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">Trade-Fair</span>
      <nav class="mdl-navigation">
        <router-link class="mdl-navigation__link" to="/" @click.native="hideMenu">Home</router-link>
        <router-link class="mdl-navigation__link" to="/post" @click.native="hideMenu">Post</router-link>
      </nav>
    </div>
    <main class="mdl-layout__content">
      <div class="page-content">
        <router-view></router-view>
      </div>
    </main>
    <footer class="mdl-mini-footer">
      <div class="mdl-mini-footer__left-section">
        <div class="mdl-logo">
          More Information
        </div>
        <ul class="mdl-mini-footer__link-list">
          <li><a href="#">Help</a></li>
          <li><a href="#">Privacy and Terms</a></li>
          <li><a href="#">User Agreement</a></li>
        </ul>
      </div>
    </footer>
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
</style>
