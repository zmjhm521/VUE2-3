<script setup>
import { reactive } from '@vue/reactivity';
import demo from './components/demo.vue';
function showHelloMsg(value) {
  alert(`你好啊，你触发了hello事件，我收到的参数是：${value}!`)
}
</script>

<template>
  
    <demo @hello="showHelloMsg">
      <template #hello="xinxi">
        <h2>赵明杰</h2>
        <h2>{{ xinxi.school }}</h2>
        <h2>{{ xinxi.msg }}</h2>
        <h2>{{ xinxi.stu.age }}</h2>
      </template>
    </demo>
  

</template>

<style scoped>

</style>
