<script setup>
import { ref } from 'vue';
import demo from './components/demo.vue';
let isShowDemo = ref(true)
</script>

<template>
    <div>
        <button @click="isShowDemo =!isShowDemo">切换隐藏/显示</button>
        <demo v-if="isShowDemo"></demo>
    </div>
</template>

<style scoped>

</style>
