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
      ref="text"
      aria-hidden="true"
    >{{ char }}</span>
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
  font-size: 4.5em;
}

.worm {
  color: #FC3D21;
}

.hidden {
  opacity: 0;
}
</style>
