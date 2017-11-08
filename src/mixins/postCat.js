const postCat = {
  methods: {
    postCat (catUrl, title) {
      this.$root.$firebaseRefs.cat.push(
        {
          'url': this.catUrl,
          'comment': this.title,
          'info': 'Posted by Charles on Tuesday',
          'created_at': -1 * new Date().getTime()
        }
      ).then(
        this.$router.push('/')
      )
    }
  }
}

export default postCat
