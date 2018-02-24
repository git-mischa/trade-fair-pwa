<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">Exhibition</span>
      </div>
      <span class="reload-icon">
        <button id="reload-button" class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" disabled>
          <i class="material-icons">&#xE86A;</i>
        </button>
      </span>
    </header>
    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">Exhibition</span>
      <nav class="mdl-navigation">
        <router-link class="mdl-navigation__link" to="/" @click.native="hideMenu">Home</router-link>
        <router-link class="mdl-navigation__link" to="/exhibitionmap" @click.native="hideMenu">Exhibition Map</router-link>
        <router-link class="mdl-navigation__link" to="/overview" @click.native="hideMenu">Calendar - Overview</router-link>
        <router-link class="mdl-navigation__link" to="/board" @click.native="hideMenu">Message Board</router-link>
        <router-link class="mdl-navigation__link" to="/about" @click.native="hideMenu">About</router-link>
      </nav>
    </div>
    <main class="mdl-layout__content">
      <div class="page-content">
        <div class="l-wrapper">
          <div v-if="$root.loading" class="mdl-spinner mdl-js-spinner is-active"></div>
          <router-view v-else></router-view>
        </div>
      </div>
    </main>
    <footer class="footer">
      <div class="footer-icon">
        <object data="../static/img/re-lounge_logo.svg"></object>
      </div>
      <span class="footer-copyright">© 2018</span>
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
    },
    loadFullImage (item) {
      if (!item || !item.href) return

      // load image
      var img = new Image()
      if (item.dataset) {
        img.srcset = item.dataset.srcset || ''
        img.sizes = item.dataset.sizes || ''
      }
      img.src = item.href
      img.className = 'reveal'
      if (img.complete) addImg()
      else img.onload = addImg

      // replace image
      function addImg () {
        // disable click
        item.addEventListener('click', function (e) {
          e.preventDefault()
        }, false)

        // add full image
        item.appendChild(img).addEventListener('animationend', function (e) {
          // remove preview image
          var pImg = item.querySelector && item.querySelector('img.preview')
          if (pImg) {
            e.target.alt = pImg.alt || ''
            item.removeChild(pImg)
            e.target.classList.remove('reveal')
            this.removeEventListener('animationend', this)
          }
        })
      }
    },
    inView (items) {
      var wT = window.pageYOffset
      var wB = wT + window.innerHeight
      var cRect
      var pT
      var pB
      var p = 0
      console.log(items.length)
      while (p < items.length) {
        cRect = items[p].getBoundingClientRect()
        pT = wT + cRect.top
        pB = pT + cRect.height

        if (wT < pB && wB > pT) {
          this.loadFullImage(items[p])
          items[p].classList.remove('replace')
        } else {
          p++
        }
      }
    }
  },
  mounted () {
    var pItem = document.getElementsByClassName('progressive replace')
    var timer

    let contentArea = document.body.querySelector('.mdl-layout__content')

    let scroller = (e) => {
      timer = timer || setTimeout(() => {
        timer = null
        // this.requestAnimationFrame(this.inView)
        this.inView(pItem)
      }, 300)
    }
    contentArea.addEventListener('scroll', scroller, false)
    contentArea.addEventListener('resize', scroller, false)
    this.inView(pItem)

    console.log(document.querySelector('.mdl-layout'))
  }
}
window.addEventListener('load', () => {
  // let reloadButton = document.getElementById('reload-button')
  // reloadButton.removeAttribute('disabled')
})
</script>

<style>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import url('https://code.getmdl.io/1.2.1/material.blue-red.min.css');

* {
    font-family: 'Roboto';
    box-sizing: border-box;
}

.mdl-layout {
  padding-bottom: 60px;
}

.reload-icon {
  position: fixed;
  bottom: 55px;
  right: 10px;
  z-index: 5;
}

.l-wrapper {
  margin-right: auto;
  margin-left: auto;
  padding: 0 20px;
  max-width: 1130px;
}

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

.footer {
  padding: 0 15px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #424242;
  z-index: 10;
}

.footer-icon {
  flex: 3;
  text-align: left;
}

.footer-icon object {
  height: 40px;
}

.footer-copyright {
  text-align: right;
  flex: 1;
  color: azure;
}
</style>
