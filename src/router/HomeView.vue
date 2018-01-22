<template>
  <div>
    <div class="home-teaser">
      <img class="home-teaser__image" src="./../../static/img/home.jpg" />
      <h1 class="home-teaser__title">Willkommen bei Messe 123</h1>
    </div>
    <p>
      Wie jedes Jahr treffen sich bei der Messer 123 hunderte Experten und Interessierte im Bereich 123.<br>
      Besucher können sich nicht nur die Vialzahl der Firmenstände anschauen, sondern sich außerdem bei den zahlreichen Meet-Ups treffen und Talks zu allen möglichen Themen zuhören. Hier gilt: First come first serve – also nicht warten sondern rechtzeitig antanzen.
    </p>
    <h2>Unsere Speaker:</h2>

    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--3-col mdl-cell--1-col-tablet mdl-cell--hide-phone"></div>
      <div class="mdl-cell mdl-cell--6-col mdl-cell--4-col-phone">
        
      </div>
    </div>
    <div id="speaker1" class="speaker-card mdl-card mdl-shadow--2dp">
      <div class="mdl-card__title mdl-card--expand">
        <h2 class="mdl-card__title-text">Frank Furt</h2>
      </div>
      <div class="mdl-card__supporting-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis.
      </div>
      <div class="mdl-card__actions mdl-card--border">
        <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
          Profil
        </a>
      </div>
    </div>
    <!-- 
    <router-link class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
      <i class="material-icons">add</i>
    </router-link> 
    -->
  </div>
</template>

<script>
export default {
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
    width: 320px;
    height: 301px;
  }

  .speaker-card > .mdl-card__title {
    color: azure;
  }

  #speaker1 > .mdl-card__title {
    background: url('./../../static/img/avatar_1.jpeg') bottom right 15% no-repeat #46B6AC;
    background-size: contain;
  }  

  #speaker2 > .mdl-card__title {
    background: url('./../../static/img/avatar_2.jpeg') bottom right 15% no-repeat #46B6AC;
    background-size: contain;
  }  

  #speaker3 > .mdl-card__title {
    background: url('./../../static/img/avatar_3.jpeg') bottom right 15% no-repeat #46B6AC;
    background-size: contain;
  }  

  #speaker4 > .mdl-card__title {
    background: url('./../../static/img/avatar_4.jpeg') bottom right 15% no-repeat #46B6AC;
    background-size: contain;
  }  
  
  #speaker5 > .mdl-card__title {
    background: url('./../../static/img/avatar_5.jpeg') bottom right 15% no-repeat #46B6AC;
    background-size: contain;
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