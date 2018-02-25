<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">Trade Fair</span>
        <span id="offline-switch" class="offline-message">
          You're currently offline <i class="material-icons">&#xE195;</i>
        </span>
      </div>
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 290 140"><path id="Layer_2" fill="#fff" fill-rule="evenodd" d="M264.6 56.5V59l-3.1-3.1 3.1-3.1v2.5c1.4 0 2.6-.5 3.6-1.4 1-1 1.4-2.1 1.4-3.5s-.5-2.5-1.4-3.5l.9-.9c1.2 1.2 1.8 2.6 1.8 4.3 0 1.7-.6 3.1-1.8 4.3-1.2 1.3-2.7 1.9-4.5 1.9zm.1-12.3v-2.5l3.1 3.1-3.1 3.1v-2.5c-1.4 0-2.6.5-3.6 1.4-1 1-1.4 2.1-1.4 3.5s.5 2.5 1.4 3.5l-.9.9c-1.2-1.2-1.8-2.6-1.8-4.3 0-1.7.6-3.1 1.8-4.3 1.2-1.3 2.7-1.9 4.5-1.9zm-.1 16.5c-5.7 0-10.4-4.6-10.4-10.4 0-5.7 4.6-10.4 10.4-10.4 5.7 0 10.4 4.6 10.4 10.4 0 5.8-4.6 10.4-10.4 10.4zm0-19.8c-5.2 0-9.4 4.2-9.4 9.4s4.2 9.4 9.4 9.4 9.4-4.2 9.4-9.4c.1-5.1-4.2-9.4-9.4-9.4zM40 62.9v28.9h4.7v-17c0-5.2 2.2-7.8 6.5-7.8.3 0 1.2.1 2.5.3v-4.9c-2.5 0-4.3.2-5.4.7-1.5.7-2.7 2.1-3.6 4.2V63H40zm25.1 4.7c.8-1.1 2.1-1.7 3.8-1.7 2 0 3.4.5 4.2 1.5 1.1 1.4 1.6 4 1.6 7.9H63.5c0-3.7.6-6.2 1.6-7.7zm14.6 11.2H63.5c0 3.8.5 6.4 1.5 7.8.8 1.2 2.3 1.8 4.3 1.8 1.5 0 2.7-.6 3.7-1.7.8-1 1.3-2.3 1.4-3.8h5.1c0 6.2-3.4 9.3-10.1 9.3-3.6 0-6.2-.8-7.8-2.5-2.1-2.2-3.2-6.2-3.2-12.1 0-5.1.6-8.7 1.7-10.9 1.6-3 4.7-4.5 9.3-4.5 4 0 6.7 1.1 8.2 3.4 1.4 2.1 2.1 5.6 2.1 10.6v2.6zm19.5-.4V74H86.6v4.4h12.6zm7.3-27.9v41.3h4.7V50.5h-4.7zm18.2 35.1c-.8-1.8-1.2-5.1-1.2-9.9 0-3.7.6-6.3 1.7-7.8 1-1.2 2.4-1.8 4.4-1.8 2 0 3.4.6 4.4 1.8 1.1 1.5 1.7 4.1 1.7 7.8 0 4.8-.4 8.1-1.2 9.9-.9 1.9-2.5 2.9-4.9 2.9-2.4 0-4-1-4.9-2.9zm4.8 6.7c-3.6 0-6.2-.8-7.8-2.5-2.1-2.2-3.2-6.2-3.2-12.1 0-5.1.6-8.7 1.7-10.9 1.6-3 4.7-4.5 9.3-4.5 4.5 0 7.6 1.5 9.3 4.5 1.1 2.2 1.7 5.8 1.7 10.9 0 5.8-1.1 9.8-3.2 12.1-1.6 1.7-4.2 2.5-7.8 2.5zm32-5.1c-1.1 1-2.3 1.5-3.8 1.5-3.3 0-4.9-1.9-4.9-5.8v-20h-4.7v22c0 5 2.6 7.4 7.8 7.4 3.3 0 5.7-1.4 7.3-4.1h.2v3.5h5c-.2-2.2-.3-4.2-.3-6V62.9h-4.7v19.2c0 2.2-.6 3.9-1.9 5.1zM197 71.8c0-3.1-.5-5.4-1.5-6.9-1.2-1.7-3.3-2.6-6.2-2.6-1.9 0-3.4.3-4.6.9-1.2.6-2.2 1.7-3.1 3.3h-.2v-3.7h-5c.2 2.2.3 4.2.3 6v22.9h4.7v-17c0-5.7 2-8.5 5.9-8.5 3.4 0 5.1 1.9 5.1 5.6v20h4.7v-20zM220 84c-.8 2.6-2.4 3.8-4.8 3.8-1.9 0-3.2-.7-4.1-2.2-1-1.8-1.5-4.8-1.5-9.2 0-2.9.2-5.1.7-6.6.8-2.4 2.4-3.7 4.7-3.7 2.5 0 4.2 1.3 5 3.9.4 1.3.6 3.7.6 7.1 0 3.3-.2 5.6-.6 6.9zm.6-17.6v-3.5h4.7v31.8c0 3-1 5.2-2.9 6.4-1.7 1.1-4.2 1.6-7.7 1.6-2.6 0-4.7-.6-6.3-1.9-1.8-1.4-2.6-3.3-2.4-5.8h5.3c.1 2.8 1.5 4.2 4.4 4.2 1.6 0 2.8-.4 3.7-1.3.9-.9 1.3-2.1 1.3-3.6v-6h-.2c-1.3 2.4-3.4 3.6-6.3 3.6-3.6 0-6.2-1.5-7.6-4.5-1.2-2.4-1.8-6-1.8-10.9 0-5.7 1.2-9.7 3.7-12.1 1.5-1.4 3.3-2.1 5.4-2.1 3.1 0 5.4 1.4 6.7 4.1zm19.5 1.2c.8-1.1 2.1-1.7 3.8-1.7 2 0 3.4.5 4.2 1.5 1.1 1.4 1.6 4 1.6 7.9h-11.3c.1-3.7.7-6.2 1.7-7.7zm14.6 11.2h-16.2c0 3.8.5 6.4 1.5 7.8.8 1.2 2.3 1.8 4.3 1.8 1.5 0 2.7-.6 3.7-1.7.8-1 1.3-2.3 1.4-3.8h5.1c0 6.2-3.4 9.3-10.1 9.3-3.6 0-6.2-.8-7.8-2.5-2.1-2.2-3.2-6.2-3.2-12.1 0-5.1.6-8.7 1.7-10.9 1.6-3 4.7-4.5 9.3-4.5 4 0 6.7 1.1 8.2 3.4 1.4 2.1 2.1 5.6 2.1 10.6v2.6z" clip-rule="evenodd"/></svg>
      </div>
      <span class="footer-copyright">2018 © Michael Magrian</span>
    </footer>
  </div>
</template>
<script>
require('material-design-lite')
export default {
  name: 'app',
  data () {
    return {
      state: null
    }
  },
  methods: {
    detected (e) {
      this.state = e
      console.log(e)
      setTimeout(function () {
        this.detected()
      }, 1000)
    },
    hideMenu: function () {
      document.getElementsByClassName('mdl-layout__drawer')[0].classList.remove('is-visible')
      document.getElementsByClassName('mdl-layout__obfuscator')[0].classList.remove('is-visible')
    },
    loadFullImage (item) {
      if (!item || !item.href) return

      var img = new Image()
      if (item.dataset) {
        img.srcset = item.dataset.srcset || ''
        img.sizes = item.dataset.sizes || ''
      }
      img.src = item.href
      img.className = 'reveal'
      if (img.complete) addImg()
      else img.onload = addImg

      function addImg () {
        item.addEventListener('click', function (e) {
          e.preventDefault()
        }, false)

        item.appendChild(img).addEventListener('animationend', function (e) {
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
    let networkStatus = null

    let checkOnline = () => {
      if (navigator.onLine !== networkStatus) {
        console.log(navigator.onLine)
        if (navigator.onLine) {
          document.querySelector('#offline-switch').classList.remove('active')
        } else {
          document.querySelector('#offline-switch').classList.add('active')
        }
        networkStatus = navigator.onLine
      }
      setTimeout(() => {
        checkOnline()
      }, 3000)
    }

    checkOnline()

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
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import url('https://code.getmdl.io/1.2.1/material.blue-red.min.css');

* {
    font-family: 'Roboto';
    box-sizing: border-box;
}

.mdl-layout {
  padding-bottom: 40px;
}
.mdl-layout__header-row {
  justify-content: space-between;
}

.offline-message {
  float: right;
  display: flex;
  align-items: center;
  color: #424242;
  opacity: 0;
  transition: .2s;
}

.offline-message i {
  margin-left: 10px;
}

.offline-message.active {
  opacity: 1;
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
  flex: 1;
  text-align: left;
}

.footer-icon svg {
  height: 40px;
}

.footer-copyright {
  text-align: right;
  flex: 1;
  color: azure;
}
</style>
