<script>
import { ref } from 'vue';
import getPoint from '../hooks/usePoint'
export default {
    name: 'demo',
    setup() {
        let n = ref(0)
        function add() {
            n.value++
        }
        let point = getPoint()
        // 通过组合式API的形式去使用生命周期钩子
        return {
            n,
            add,
            point
        }

    },
}
</script>
<template>
    <div>
        <h2>当前和为{{ n }}</h2>
        <h2>x坐标{{ point.x }}</h2>
        <h2>y坐标{{ point.y }}</h2>
        <button @click="add">点我n+1</button>
    </div>
</template>
<style scoped>

</style>