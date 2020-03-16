<template>
  <div
    class="text-scroll"
    :aria-label="text"
  >
    <span
      v-for="(char, index) in textAsArray"
      :key="index"
      aria-hidden="true"
    >{{char}}</span>
  </div>
</template>

<script>
export default {
  name: 'TextScroll',
  props: {
    text: {
      type: String,
      default: ''
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
  font-family: 'Orbitron', sans-serif;
  color: white;
}
</style>
