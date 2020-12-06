<template>
<span
    class="text-flash"
    :aria-label="text"
>
    <span
        v-for="(word, index) in text"
        :key="index"
        ref="text"
        aria-hidden="true"
    >
        {{ word }}
    </span>
</span>    
</template>

<script>
export default {
    name: 'TextFlash',
    props: {
        text: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
.text-flash {
    position: relative;
    color: #1a73e8;
}

.text-flash > span {
    position: absolute;
    left: 0;
}
</style>
