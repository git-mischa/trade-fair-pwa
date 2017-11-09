<template>
  <table class="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
    <thead>
      <tr>
        <th class="mdl-data-table__cell--non-numeric">Event Title</th>
        <th>Date – Time</th>
        <th>Speaker</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="entry in this.getEntries()" v-bind:key="entry.id">
        <td>
          <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-data-table__select mdl-js-ripple-effect--ignore-events is-upgraded" data-upgraded=",MaterialCheckbox,MaterialRipple">
            <input type="checkbox" class="mdl-checkbox__input">
            <span class="mdl-checkbox__focus-helper"></span>
            <span class="mdl-checkbox__box-outline">
              <span class="mdl-checkbox__tick-outline"></span>
            </span>
            <span class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" data-upgraded=",MaterialRipple">
              <span class="mdl-ripple is-animating" style="width: 103.823px; height: 103.823px; transform: translate(-50%, -50%) translate(18px, 18px);"></span>
            </span>
          </label>
        </td>
        <td class="mdl-data-table__cell--non-numeric">{{ entry.title }}</td>
        <td>{{ entry.date }} – {{ entry.time }}</td>
        <td>{{ entry.speaker }}</td>
      </tr>
    </tbody>
  </table>
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
    // TODO: Insert delete dialog
    // displayDetails (id) {
    //   this.$router.push({name: 'detail', params: { id: id }})
    // },
      getEntries () {
        if (navigator.onLine) {
          this.cacheEntries()
          return this.$root.calendar
        } else {
          return JSON.parse(localStorage.getItem('calendar'))
        }
      },
      cacheEntries () {
        this.$root.$firebaseRefs.calendar.orderByChild('created_at').once('value', (snapchot) => {
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
table {
  margin: 2em auto;
  max-width: 100%;
}
th, td {
  padding-top: 1em; 
  padding-bottom: 1em; 
  font-size: 1.5em;
}
</style>