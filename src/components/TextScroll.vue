<template>
  <span
    class="text-scroll"
    :class="[font]"
    :aria-label="text"
  >
    <span
      v-for="(char, index) in textAsArray"
      :key="index"
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
}

.orbitron {
  font-family: 'Orbitron', sans-serif;
}

.worm {
  font-family: 'NasalizationRg-Regular';
}
</style>
