<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition-group 
            name="animate__animated animate__bounce"
            enter-active-class="animate__rubberBand" 
            leave-active-class="animate__backOutLeft"
            appear>
            <h1 v-show="isShow" key="1">你好呀</h1>
            <h1 v-show="isShow" key="2">赵明杰</h1>
        </transition-group>
    </div>
</template>

<script>
import 'animate.css'
export default {
    name: 'Test',
    data() {
        return {
            isShow: true
        }
    }
}
</script>

<style scoped>
h1 {
    background-color: #bfa;
}


</style>