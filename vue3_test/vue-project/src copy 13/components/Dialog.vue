<script setup>
// 不要忘记把数据设置为响应式
import { ref } from 'vue';
let show = ref(false)
</script>

<template>
    <div>
        <button @click="show = true">点我弹个窗</button>
        <teleport to="body">
            <div v-if="show" class="mask">
                <div class="dialog">
                    <h3>我是一个弹窗</h3>
                    <h4>一些内容</h4>
                    <h4>一些内容</h4>
                    <h4>一些内容</h4>
                    <h4>一些内容</h4>
                    <button @click="show = false">关闭弹窗</button>
                </div>
            </div>
        </teleport>
    </div>
</template>

<style scoped>
    .mask{
        position: absolute;
        top: 0;bottom: 0;left: 0;right: 0;
        background-color: rgba(0,0,0,0.5);
    }
    .dialog {
        text-align: center;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 300px;
        height: 300px;
        background-color: blue;
    }
</style>