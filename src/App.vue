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
      ref="animation6"
      :text="animation[6].text"
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
      this.animateBlock(key, animationBlock)
    })
  },
  methods: {
    animateBlock(key, block) {
      const id = this.getId(key)
      if (block.type === 'flash') {
        this.animateFlash(id)
      } else {
        this.animateTypewriter(id)
      }
    },
    animateTypewriter(id) {
      this.timeline.add({
        targets: this.$refs[id].$refs.text,
        opacity: 1,
        duration: 100,
        delay: (el, i) => 100 + 50 * i
      })
    },
    animateFlash(id) {
      const words = this.$refs[id].$refs.text
      const finalWord = words.splice(-1, 1)
      words.forEach(word => {
        this.timeline.add({
          targets: word,
          opacity: [0,1],
          scale: [0.2, 1],
          duration: 800,
        })
  
        this.timeline.add({
          targets: word,
          opacity: 0,
          scale: 3,
          duration: 600,
          easing: "easeInExpo",
          delay: 500,
        })
      })

      this.timeline.add({
        targets: finalWord,
        opacity: [0,1],
        scale: [0.2, 1],
        duration: 800,
      })
    },
    getId(key) {
      return `animation${key}`
    }
  },
  data() {
    return {
      animation: {
        1: {
          type: 'typewriter',
          text: 'Hello Universe!',
        },
        2: {
          type: 'typewriter',
          text: 'I\'m Dave!',
        },
        3: {
          type: 'typewriter',
          text: 'I develop software for ',
        },
        4: {
          type: 'typewriter',
          text: 'NASA',
        },
        5: {
          type: 'typewriter',
          text: 'Work is... ',
        },
        6: {
          type: 'flash',
          text: [
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

  color: white;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.hidden {
  opacity: 0;
}
</style>
