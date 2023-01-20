<script setup>
// import Clid from './components/Clid.vue'
import { defineAsyncComponent } from 'vue';//静态引入
const Clid = defineAsyncComponent(()=>import('./components/Clid.vue'))//异步引入

</script>

<template>
    <div class="app">
        <h3>我是APP组件（组）</h3>
        <Suspense>
            <template #default>
                <Clid></Clid>
            </template>
            <template #fallback>
                <h3>稍等加载中...</h3>
            </template>
        </Suspense>
    </div>
</template>

<style scoped>
 .app{
    background-color: #bfa;
    padding: 10px;
 }
</style>