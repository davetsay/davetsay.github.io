<template>
<div id="app">
  <div class="content">
    <TextScroll
      :text="text['1']"
      animation-set="1"
    />
    <TextScroll
      text="I'm Dave!"
      animation-set="2"
    />
    <div>
      <TextScroll
        text="I work at "
        animation-set="3"
      />
      <TextScroll
        text="NASA"
        class="nasa"
        animation-set="4"
      />
    </div>
    <TextScroll
      text="It's "
      animation-set="5"
    />
    <TextFlash
      :words="words"
      class="nasa"
    />
  </div>
</div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js'
import TextScroll from './components/TextScroll.vue'
import TextFlash from './components/TextFlash.vue'

export default {
  name: 'App',
  components: {
    TextScroll,
    TextFlash,
  },
  mounted() {
    this.timeline = anime.timeline()

    for (let i = 0; i < this.text['1'].length; i++) {
      console.log(`animation-set-1-${i}`)
      this.timeline.add({
        targets: `.animation-set-1-${i}`,
        opacity: 1,
        duration: 100,
      }, '+=100')
    }
  },
  data() {
    return {
      text: {
        '1': 'Hello Universe!',
      }
    }
  },
  methods: {

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
