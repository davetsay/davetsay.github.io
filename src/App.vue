<template>
<div id="app">
  <div class="content">
    <TextScroll
      text="Hello Universe!"
    />
    <TextScroll
      text="I'm Dave!"
    />
    <div>
      <TextScroll
        text="I work at "
      />
      <TextScroll
        text="NASA"
        class="nasa"
      />
    </div>
    <TextScroll
      text="It's "
    />
    <TextFlash
      :words="words"
      class="nasa"
    />
  </div>
</div>
</template>

<script>
import TextScroll from './components/TextScroll.vue'
import TextFlash from './components/TextFlash.vue'

export default {
  name: 'App',
  components: {
    TextScroll,
    TextFlash
  },
  computed: {
    words() {
      return [
        'cool',
        'exciting',
        'challenging',
        'fun',
        'fullfilling',
        'worthwhile',
        'did I say cool?',
        'space',
        'engaging',
        'awe inspiring',
        'the Future',
      ]
    }
  },
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

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
