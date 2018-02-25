<template>
  <div>
    <div class="home-teaser">
      <!-- <img class="home-teaser__image" src="./../../static/img/home.jpg" /> -->
      <a href="./../../static/img/home.jpg" class="progressive replace">
        <img src="./../../static/img/home_min.jpg" class="preview" alt="entry hall" />
      </a>
      <h1 class="home-teaser__title">Welcome to trade fair 123</h1>
    </div>
    <p>
      We meet again as we do every year at the trade fair 123 with hundreds of experts and thousands of curious people.<br>
      Visitors can not only visit the vast amount of company booths, but also attend countless meet-ups and talks around a variety of topics. First come first serve, so don't wait around and be quick.
    </p>
    <h2>This year's speakers:</h2>

    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--6-col" v-for="speaker in this.getSpeakers()" v-bind:key="speaker.id">
        <div id="speaker1" class="speaker-card mdl-card mdl-shadow--2dp">
          <div class="mdl-card__title mdl-card--expand">
            <a :href="speaker.image" class="card__image progressive replace">
              <img :src="speaker.imgPreview" class="preview" :alt="'Speaker: ' + speaker.name" />
            </a>
            <h2 class="mdl-card__title-text">{{ speaker.name }}</h2>
          </div>
          <div class="mdl-card__supporting-text">
            {{ speaker.description }}
          </div>
          <div class="mdl-card__actions mdl-card--border">
            <router-link v-bind:speaker="speaker" :to="'/detail/' + speaker.id" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
              Profil
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      image: '',
      imgPreview: '',
      description: ''
    }
  },
  methods: {
    getSpeakers () {
      if (navigator.onLine) {
        this.cacheSpeakers()
        return this.$root.speaker
      } else {
        return JSON.parse(localStorage.getItem('speaker'))
      }
    },
    cacheSpeakers () {
      this.$root.$firebaseRefs.speaker.orderByChild('name').once('value', (snapshot) => {
        let cachedSpeakers = []
        snapshot.forEach((speaker) => {
          let cachedSpeaker = speaker.val()
          cachedSpeaker['.key'] = speaker.key
          cachedSpeakers.push(cachedSpeaker)
        })
        localStorage.setItem('speaker', JSON.stringify(cachedSpeakers))
      })
    }
  },
  mounted () {
    this.cacheSpeakers()
  }
}
</script>
<style scoped>
  h2 {
    font-size: 34px;
  }

  .home-teaser {
    margin-bottom: 2em;
    position: relative;
  }

  .home-teaser__image {
    width: 100%;
  }

  .home-teaser__title {
    margin: 0;
    padding: 10px;
    width: 100%;
    background: rgb(33, 150, 243);
    color: azure;
    line-height: 1;
    font-size: 20px;
  }

  .speaker-card.mdl-card {
    margin: 0 10px 10px 0;
    width: 100%;
    max-width: 320px;
    height: 301px;
  }

  .speaker-card > .mdl-card__title {
    color: azure;
    position: relative;
  }

  .mdl-card__title-text{
    z-index: 1;
  }

  .card__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  @media screen and (min-width: 420px) {
    .home-teaser__title {
      font-size: 30px;
    }
  }
  @media screen and (min-width: 480px) {
    .home-teaser__title {
      padding: 10px 15px;
      font-size: 34px;
    }
  }
  @media screen and (min-width: 560px) {
    .home-teaser__title {
      font-size: 40px;
    }
  }
  @media screen and (min-width: 640px) {
    .home-teaser__title {
      width: auto;
      max-width: calc(100% - 75px);
      position: absolute;
      bottom: 30px;
      left: 30px;  
      border-radius: 3px;
    }
  }
</style>
<style>
  a.progressive {
    position: relative;
    display: block;
    overflow: hidden;
    outline: none;
  }

  a.progressive:not(.replace) {
    cursor: default;
  }

  a.progressive img {
    display: block;
    width: 100%;
    max-width: none;
    height: auto;
    border: 0 none;
  }

  a.progressive img.preview {
    filter: blur(2vw);
    transform: scale(1.05);
  }

  a.progressive img.reveal {
    position: absolute;
    left: 0;
    top: 0;
    will-change: transform, opacity;
    animation: reveal 1s ease-out;
  }

  @keyframes reveal {
    0% { transform: scale(1.05); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
  }
</style>