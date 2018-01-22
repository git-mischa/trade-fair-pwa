<template>
  <div class="mdl-grid">
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
            In Kalender eintragen
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
    }
  }
</script>
<style scoped>
.card-event.mdl-card {
  width: 256px;
  height: 256px;
  background: #3E4EB8;
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