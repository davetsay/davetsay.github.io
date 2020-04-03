<template>
<div id="app">
  <div class="content">
    <TextScroll
      ref="animation1"
      :text="animation[1].text"
    />
    <TextScroll
      ref="animation2"
      :text="animation[2].text"
    />
    <div>
      <TextScroll
        ref="animation3"
        :text="animation[3].text"
      />
      <TextScroll
        ref="animation4"
        :text="animation[4].text"
        class="nasa" 
      />
    </div>
    <TextScroll
        ref="animation5"
        :text="animation[5].text"
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
import TextScroll from './components/TextScroll'
import TextFlash from './components/TextFlash'

export default {
  name: 'App',
  components: {
    TextScroll,
    TextFlash,
  },
  mounted() {
    this.timeline = anime.timeline()
    Object.entries(this.animation).forEach(([key, animationBlock]) => {
      for (let i = 0; i < animationBlock.text.length; i++) {
        this.timeline.add({
          targets: this.$refs[`animation${key}`].$refs[i],
          opacity: 1,
          duration: 100,
        }, '+=100')
      }
      
    })
  },
  data() {
    return {
      animation: {
        1: {
          text: 'Hello Universe!',
        },
        2: {
          text: 'I\'m Dave!',
        },
        3: {
          text: 'I develop software for ',
        },
        4: {
          text: 'NASA',
        },
        5: {
          text: 'It. Is. ',
        },
      },
    }
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
.hidden {
  opacity: 0;
  color: white;
}
</style>
