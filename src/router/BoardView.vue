<template>
  <div class="board">
    <form>
      <div class="mdl-grid">
        <div class="mdl-cell mdl-cell--12-col">
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty" required="required" >
            <input id="title" v-model="title" type="text" class="mdl-textfield__input" required="required"/>
            <label for="title" class="mdl-textfield__label">Message Title</label>
          </div>
        </div>
        <div class="mdl-cell mdl-cell--12-col">
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty" required="required" >
            <textarea id="message" v-model="message" type="text" class="mdl-textfield__input" required="required" rows= "3" ></textarea>
            <label for="message" class="mdl-textfield__label">Message</label>
          </div>
        </div>
        <div class="mdl-cell mdl-cell--12-col">
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty" required="required" >
            <input id="user" v-model="user" type="text" class="mdl-textfield__input" required="required"/>
            <label for="user" class="mdl-textfield__label">Posted by</label>
          </div>
        </div>
          <div class="actions">
            <a @click.prevent="postMessage" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
              Post a message
            </a>
          </div>
      </div>
    </form>
    <div v-for="message in this.getMessages()" class="image-card" v-bind:key="message.id">
      <div class="">
        {{ message.title }}
      </div>
      <div class="">
        {{ message.message }}
      </div>
      <div class="">
        {{ message.user }}
      </div>
    </div>
  </div>
</template>
<script>
// import parse from 'xml-parser'
import postMessage from '@/mixins/postMessage'
export default {
  mixins: [postMessage],
  data () {
    return {
      title: '',
      message: '',
      user: ''
    }
  },
  methods: {
    // TODO: Insert delete dialog
    // displayDetails (id) {
    //   this.$router.push({name: 'detail', params: { id: id }})
    // },
    getMessages () {
      if (navigator.onLine) {
        this.cacheMessages()
        return this.$root.board
      } else {
        return JSON.parse(localStorage.getItem('messages'))
      }
    },
    cacheMessages () {
      this.$root.$firebaseRefs.board.orderByChild('created_at').once('value', (snapchot) => {
        let cachedMessages = []
        snapchot.forEach((message) => {
          let cachedMessage = message.val()
          cachedMessage['.key'] = message.key
          cachedMessages.push(cachedMessage)
        })
        localStorage.setItem('messages', JSON.stringify(cachedMessages))
      })
    }
  },
  mounted () {
    this.cacheMessages()
  }
}
</script>
<style scoped>
.board {
  margin: 0 auto;
  max-width: 600px;
}
</style>