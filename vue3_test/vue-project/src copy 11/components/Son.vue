<script setup>
import { inject } from 'vue';

let car =inject('car')
console.log(car);
</script>

<template>
    <div class="son">
        <h3>我是Son组件（孙）{{ car.name }}--{{ car.price }}</h3>
    </div>
</template>

<style scoped>
 .son{
    background-color: red;
    padding: 10px;
 }
</style>