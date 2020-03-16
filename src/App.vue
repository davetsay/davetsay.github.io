<template>
  <div id="app">
    <div class="content">
      <text-scroll
        text="Hello World! I'm Dave!"
      >
      </text-scroll>
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
body {
  margin: 0;
  padding: 0;

  background: url(assets/space.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}
.content {
  display: flex;
  align-items: center;
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
