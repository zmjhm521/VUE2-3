<script>
import { ref, reactive, toRef, toRefs, shallowReactive, shallowRef } from 'vue';
export default {
    name: 'demo',
    setup() {
        // const stu = shallowReactive({//只考虑第一层数据的响应式
        const stu = reactive({
            name: '赵明杰',
            age: 18,
            job: {
                j1: {
                    salary: 20
                }
            }
        })

        let x = shallowRef({
        // let x = ref({
            y: 0
        })
        console.log(x);
        return {
            stu,
            x,
            ...toRefs(stu)
        }

    }
}
</script>
<template>
    <div>
        <h2>当前的x.y是{{ x.y }}</h2>
        <button @click="x.y++">点我x.y+1</button>
        <button @click="x={y:888}">点我替换x</button>
        <hr>
        <h2>{{ stu }}</h2>
        <h2>姓名{{ name }}</h2>
        <h2>年龄{{ age }}</h2>
        <h2>薪资{{ job.j1.salary }}k</h2>
        <button @click="name += '@'">修改姓名</button>
        <button @click="age++">修改年龄</button>
        <button @click="job.j1.salary++">点我提薪</button>
    </div>
</template>
<style scoped>

</style>