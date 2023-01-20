<script setup>
import {  reactive, readonly, ref,isProxy,isRef,isReactive,isReadonly } from 'vue';
let sum = ref(0)
let car = reactive({
    name:'奔驰',
    price:'40w'
})
let car2 = readonly(car)

console.log(isRef(sum));
console.log(isReactive(car));
console.log(isReadonly(car2));
console.log(isProxy(car2));
console.log(isProxy(sum));



</script>

<template>
    <div class="app">
        <h3>我是APP组件（组）</h3>
    </div>
</template>

<style scoped>
 .app{
    background-color: #bfa;
    padding: 10px;
 }
</style>