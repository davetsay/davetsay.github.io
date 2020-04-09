<template>
<span
class="text-flash"
:class="[font]"
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
}

.text-flash > span {
    position: absolute;
    left: 0;
}
</style>
