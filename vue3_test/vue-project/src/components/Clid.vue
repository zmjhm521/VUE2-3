<script setup>
import { ref } from 'vue';
let sum = ref(0)
let result = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve({sum})
    }, 2000);
})
await result
</script>

<template>
    <div class="clid">
        <h3>我是Clid组件（字）</h3>
        <h3>当前和为{{ result }}</h3>
    </div>
</template>

<style scoped>
 .clid{
    background-color: orange;
    padding: 10px;
 }
</style>