<template>
  <div class="notFound-container">
    <div class="notFound-message">
      <img src="./../../static/img/dino.png" />
      <p>
        Sorry this page does not exist. Want to go back?
      </p>
      <router-link to="/">
        <button class="mdl-button mdl-js-button mdl-button--raised">The way back home</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {},
  methods: {},
  mounted () {}
}
</script>
<style>
	.notFount-container {
		width: 100%;
		height: 100%;
		position: relative;
	}
  .notFound-message {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  .notFound-message img {
    width: 115px;
  }
</style>