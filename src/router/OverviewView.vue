<template>
  <div class="mdl-grid">
    <div id="offline-disclaimer" class="disclaimer">
      <span class="mdl-chip mdl-chip--contact">
        <span class="mdl-chip__contact mdl-color--teal mdl-color-text--white"><i class="material-icons">&#xE195;</i></span>
        <span class="mdl-chip__text">You're offline</span>
      </span>
      <p>This schedule might not be up-to-date anymore. Be advised that you should update with an active internet connection to get the latest information</p>
    </div>
    <div class="mdl-cell mdl-cell--4-col" v-for="entry in this.getEntries()" v-bind:key="entry.id">
      <div class="card-event mdl-card mdl-shadow--2dp">
        <div class="mdl-card__title mdl-card--expand">
          <h4>
            {{ entry.title }}:<br>
            {{ entry.date }}<br>
            {{ entry.time }}<br>
            {{ entry.speaker }}
          </h4>
        </div>
        <div class="mdl-card__actions mdl-card--border">
          <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
            Add to calendar
          </a>
          <div class="mdl-layout-spacer"></div>
          <i class="material-icons">event</i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        date: '',
        speaker: '',
        time: '',
        title: ''
      }
    },
    methods: {
      getEntries () {
        if (navigator.onLine) {
          this.cacheEntries()
          return this.$root.calendar
        } else {
          return JSON.parse(localStorage.getItem('calendar'))
        }
      },
      cacheEntries () {
        this.$root.$firebaseRefs.calendar.orderByChild('date').once('value', (snapchot) => {
          let cachedEntries = []
          snapchot.forEach((entry) => {
            let cachedEntry = entry.val()
            cachedEntry['.key'] = entry.key
            cachedEntries.push(cachedEntry)
          })
          localStorage.setItem('calendar', JSON.stringify(cachedEntries))
        })
      }
    },
    mounted () {
      this.cacheEntries()

      let offlineMode = () => {
        let anchor = document.querySelector('#offline-switch')
        let disclaimer = document.querySelector('#offline-disclaimer')
        if (anchor.classList.contains('active')) {
          disclaimer.classList.add('active')
        } else {
          disclaimer.classList.remove('active')
        }
        setTimeout(() => {
          offlineMode()
        }, 1000)
      }

      offlineMode()
    }
  }
</script>
<style scoped>
.mdl-grid {
  position: relative;
}
.card-event.mdl-card {
  width: 256px;
  height: 256px;
  background: #3E4EB8;
}
.disclaimer {
  max-height: 0;
  /* opacity: 0; */
  text-align: center;
  transition: 1s ease-in-out;
  overflow: hidden;
}
.disclaimer.active {
  max-height: 1000px;
  /* opacity: 1; */
}
.mdl-chip__contact {
  position: relative;
}
.mdl-chip__contact i {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
}
.card-event > .mdl-card__actions {
  border-color: rgba(255, 255, 255, 0.2);
}
.card-event > .mdl-card__title {
  align-items: flex-start;
}
.card-event > .mdl-card__title > h4 {
  margin-top: 0;
}
.card-event > .mdl-card__actions {
  display: flex;
  box-sizing:border-box;
  align-items: center;
}
.card-event > .mdl-card__actions > .material-icons {
  padding-right: 10px;
}
.card-event > .mdl-card__title,
.card-event > .mdl-card__actions,
.card-event > .mdl-card__actions > .mdl-button {
  color: #fff;
}
</style>