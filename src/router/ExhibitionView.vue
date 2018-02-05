<template>
  <div class="map">
    <div class="map__image">
      <img src="./../../static/img/messeplan.png" />
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
      }
    },
    mounted () {
    }
  }
</script>
<style scoped>
  .map {
    overflow: hidden;
  }

  .map__image {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    white-space: nowrap;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
  }

  .map__image img {
    width: auto;
    height: 100%;
  }
</style>
