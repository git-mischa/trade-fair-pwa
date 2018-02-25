<template>
  <div>
    <h1>About this Page</h1>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--9-col mdl-cell--10-col--phone mdl-cell--8-col--tablet mdl-cell--9-col--desktop">
        <p>
          This web application is build alongside a bachelor thesis to work as a showcase prototype. Is is supposed to resemlbe a website for a trade fair. <br>
          The app is based on the JavaScript Framework <a href="https://vuejs.org/">VueJS 2</a>, in addition to 
          <a href="https://webpack.js.org/">webpack</a>, and leverages 
          <a href="https://developers.google.com/web/progressive-web-apps/">Progressive Weg App</a> caching. 
          This enables this app to be installable und offline-usable, as long as the device this is viewed on is a reasonably current Android device using one of the following Browsers: <br>
          <ul>
            <li>Google Chrome</li>
            <li>Mozilla Firefox</li>
            <li>Opera</li>
            <li>Samsung Browser</li>
          </ul>
          As of the end of February 2018 iOS devices are out of luck, but implementation of vital features has begun in Safari. When or how exactly the implementation will finally work is not forseeable at this point.
          <br>
          <br>
          As the developer of this application I would like to thank you for visiting this page and maybe even trying out the implemented features.
        </p>
      </div>
      <div class="mdl-cell mdl-cell--3-col mdl-cell--10-col--phone mdl-cell--4-col--tablet mdl-cell--3-col--desktop">
        <img class="portrait-image" src="./../../static/img/portrait.jpg" />
        <br>
        <br>
        <p>
          Developed by Michael Magrian
        </p>
      </div>
    </div>
  
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  .portrait-image {
    max-width: 230px;  
    border-radius: 50%;
  }
</style>