<template>
  <span
    class="text-scroll"
    :class="[font]"
    :aria-label="text"
  >
    <span
      v-for="(char, index) in textAsArray"
      :key="index"
      class="hidden"
      :class="animationId(index)"
      aria-hidden="true"
    >{{char}}</span>
  </span>
</template>

<script>
export default {
  name: 'TextScroll',
  props: {
    text: {
      type: String,
      default: ''
    },
    font: {
      type: String,
      default: 'orbitron'
    },
    animationSet: {
      type: String,
      required: true
    }
  },
  methods: {
    animationId(index) {
      return `animation-set-${this.animationSet}-${index}`
    }
  },
  computed: {
    textAsArray() {
      return this.text.split('')
    }
  }
}
</script>

<style>
.text-scroll {
  color: white;
  white-space: pre;
  font-size: 3.5em;
}

.orbitron {
  font-family: 'Orbitron', sans-serif;
}

.nasa {
  font-family: 'NasalizationRg-Regular';
  color: #1a73e8;
  font-size: 4.5em;
}

.hidden {
  opacity: 0;
}
</style>
