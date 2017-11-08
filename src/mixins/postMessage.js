const postMessage = {
  methods: {
    postMessage (e, title = this.title, message = this.message, user = this.user) {
      console.log(title)
      console.log(message)
      console.log(user)
      this.$root.$firebaseRefs.board.push(
        {
          'title': title,
          'message': message,
          'user': user,
          'created_at': -1 * new Date().getTime()
        }
      ).then(
        this.$router.push('/board')
      )
    }
  }
}

export default postMessage
