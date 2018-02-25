<template>
  <div class="board">
    <form>
      <div class="mdl-grid">
        <div class="mdl-cell mdl-cell--12-col">
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty"  >
            <input id="title" v-model="title" type="text" class="mdl-textfield__input" />
            <label for="title" class="mdl-textfield__label">Message Title</label>
          </div>
        </div>
        <div class="mdl-cell mdl-cell--12-col">
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty"  >
            <textarea id="message" v-model="message" type="text" class="mdl-textfield__input"  rows= "3" ></textarea>
            <label for="message" class="mdl-textfield__label">Message</label>
          </div>
        </div>
        <div class="mdl-cell mdl-cell--12-col">
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty"  >
            <input id="user" v-model="user" type="text" class="mdl-textfield__input" />
            <label for="user" class="mdl-textfield__label">Posted by</label>
          </div>
        </div>
          <div class="actions">
            <a @click.prevent="postProcess" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
              Post a message
            </a>
          </div>
      </div>
    </form>
    <section class="card-container">
      <div class="demo-card-square mdl-card mdl-shadow--2dp" v-for="message in this.getMessages()" v-bind:key="message.id">
        <div class="mdl-card__title mdl-card--expand">
          <h2 class="mdl-card__title-text">{{ message.title }}</h2>
        </div>
        <div class="mdl-card__supporting-text card-text">
          {{ message.message }}
        </div>
        <div class="mdl-card__supporting-text">
          Written by: {{ message.user }}
        </div>
      </div>
    </section>
  </div>
</template>
<script>
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
    postProcess () {
      this.postMessage()
      this.clearInput()
    },
    getMessages () {
      if (navigator.onLine) {
        this.cacheMessages()
        return this.$root.board
      } else {
        return JSON.parse(localStorage.getItem('messages'))
      }
    },
    clearInput () {
      this.title = ''
      this.message = ''
      this.user = ''
    },
    cacheMessages () {
      this.$root.$firebaseRefs.board.orderByChild('created_at').once('value', (snapshot) => {
        let cachedMessages = []
        snapshot.forEach((message) => {
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
form {
  margin: auto;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  pointer-events: none;
}

.mdl-card {
  margin: 2em;
}

.mdl-card:hover {
  box-shadow: 
  0 4px 2px 0 rgba(0,0,0,.14), 
  0 5px 3px -2px rgba(0,0,0,.2), 
  0 3px 5px 0 rgba(0,0,0,.12);
  transition: all .2s;
  cursor: pointer;
}

.mdl-card__title-text {
  align-self: flex-start;
}

.card-text {
  color: #151515;
  font-size: 1em;
}
</style>