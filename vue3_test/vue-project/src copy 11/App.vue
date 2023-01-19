<script setup>
import { provide, reactive,toRefs } from 'vue';
import Clid from './components/Clid.vue'
let car = reactive({
    name:'奔驰',
    price:'40w'
})
provide('car',car)//给自己的后代组件传递数据
</script>

<template>
    <div class="app">
        <h3>我是APP组件（组）{{ car.name }}---{{ car.price }}</h3>
        <Clid></Clid>
    </div>
</template>

<style scoped>
 .app{
    background-color: #bfa;
    padding: 10px;
 }
</style>