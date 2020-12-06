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
        class="nasa worm"
      />
    </div>
    <TextScroll
        ref="animation5"
        :text="animation[5].text"
    />
    <TextFlash
      ref="animation6"
      :text="getWords(animation[6].text)"
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
    getWords(text) {
      return text.map(el => el.word)
    },
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
      const durations = this.animation[6].text.map(el => el.duration)
      let count = 0

      words.forEach(word => {
        this.timeline.add({
          targets: word,
          opacity: [0,1],
          duration: () => 2 * durations[count++],
        })
  
        this.timeline.add({
          targets: word,
          opacity: 0,
          duration: () => 1,
        })
      })

      this.timeline.add({
        targets: finalWord,
        opacity: [0,1],
        scale: [0.2, 1],
        duration: 1200,
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
          text: `I'm Dave! A codernaut`,
        },
        3: {
          type: 'typewriter',
          text: 'for ',
        },
        4: {
          type: 'typewriter',
          text: 'NASA',
        },
        5: {
          type: 'typewriter',
          text: 'Work is like ',
        },
        6: {
          type: 'flash',
          text: [
            {
              word: 'space',
              duration: 325,
            },
            {
              word: 'cool',
              duration: 300,
            },
            {
              word: 'Whoa!',
              duration: 250,
            },
            {
              word: 'exploration',
              duration: 200,
            },
            {
              word: 'missions',
              duration: 150,
            },
            {
              word: 'moon',
              duration: 135,
            },
            {
              word: 'mars',
              duration: 125,
            },
            {
              word: 'perseverance',
              duration: 115,
            },
            {
              word: 'did I say cool?',
              duration: 100,
            },
            {
              word: 'all the science',
              duration: 250,
            },
            {
              word: 'math',
              duration: 100,
            },
            {
              word: 'physics',
              duration: 85,
            },
            {
              word: 'astrophysics',
              duration: 70,
            },
            {
              word: 'thermodynamics',
              duration: 65,
            },
            {
              word: 'flight dynamics',
              duration: 50,
            },
            {
              word: 'water ice',
              duration: 50,
            },
            {
              word: 'robotics',
              duration: 50,
            },
            {
              word: 'spacecraft',
              duration: 50,
            },
            {
              word: 'trajectory',
              duration: 50,
            },
            {
              word: 'rovers',
              duration: 50,
            },
            {
              word: 'extraterrestrial life',
              duration: 50,
            },
            {
              word: 'quantum what?',
              duration: 200,
            },
            {
              word: 'vista',
              duration: 150,
            },
            {
              word: 'viper',
              duration: 150,
            },
            {
              word: 'artemis',
              duration: 150,
            },
            {
              word: 'the Future',
              duration: 1000,
            },
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
