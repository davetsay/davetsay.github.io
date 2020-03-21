<template>
<div id="app">
  <div class="content">
    <text-scroll
      text="Hello Universe!"
    ></text-scroll>
    <text-scroll
      text="I'm Dave!"
    ></text-scroll>
    <div>
      <text-scroll
        text="I work at "
      ></text-scroll>
      <text-scroll
        text="NASA"
        font="worm"
      ></text-scroll>
    </div>
    <text-scroll
      text="It is "
    ></text-scroll>
  </div>
</div>
</template>

<script>
import TextScroll from './components/TextScroll.vue'

export default {
  name: 'App',
  components: {
    TextScroll
  }
}
</script>

<style>
@font-face {
  font-family: 'NasalizationRg-Regular';
  font-style: normal;
  font-weight: normal;
  src: local('NasalizationRg-Regular'), url('assets/fonts/nasalization rg.woff') format('woff');
}

body {
  margin: 0;
  padding: 0;

  background: url(assets/space.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  padding-left: 2em;
}

.text-scroll {
  white-space: pre;
  font-size: 4em;
  word-wrap: normal;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
