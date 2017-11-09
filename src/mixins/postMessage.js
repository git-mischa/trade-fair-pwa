const postMessage = {
  methods: {
    postMessage (e, title = this.title, message = this.message, user = this.user) {
      this.$root.$firebaseRefs.board.push(
        {
          'title': title,
          'message': message,
          'user': user,
          'created_at': -1 * new Date().getTime()
        }
      ).then(
        this.$router.push('/board')
        // this.title = '',
        // this.message = '',
        // this.user = ''
      )
    }
  }
}

export default postMessage
