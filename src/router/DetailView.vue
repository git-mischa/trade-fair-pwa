<template>
  <div class="mdl-grid">
    <div class="mdl-cell">
      <img v-bind:src="img" alt="avatar" />
      <h3>Meet <span>{{ this.name }}</span></h3>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
    </div>
    <section>
      <img src="" alt="">
    </section>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        speaker: [
          {
            id: '12345',
            name: 'Frank Furt',
            imgSrc: '/static/img/avatar_1.jpeg'
          },
          {
            id: '23456',
            name: 'Sabine Biene',
            imgSrc: '/static/img/avatar_2.jpeg'
          },
          {
            id: '34567',
            name: 'Tina Troll',
            imgSrc: '/static/img/avatar_3.jpeg'
          },
          {
            id: '45678',
            name: 'Wolfgang Wuff',
            imgSrc: '/static/img/avatar_4.jpeg'
          },
          {
            id: '56789',
            name: 'Lukas Lustig',
            imgSrc: '/static/img/avatar_5.jpeg'
          }
        ],
        name: null,
        img: null
      }
    },
    created () {
      let injectSpeaker = () => {
        console.log(this.$route.params.id)
        let currentID = this.$route.params.id.toString()
        console.log(currentID)
        this.speaker.forEach(element => {
          if (element.id === currentID) {
            this.name = element.name
            this.img = element.imgSrc
          }
        })
      }
      injectSpeaker()
    }
  }
</script>
<style scoped>
  .mdl-cell {
    text-align: center;
  }
</style>
