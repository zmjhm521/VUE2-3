<script>
import { ref, reactive,toRefs, readonly, shallowReadonly } from 'vue';
export default {
    name: 'demo',
    setup() {
        let sum = ref(0)
        let stu = reactive({
            name: '赵明杰',
            age: 18,
            job: {
                j1: {
                    salary: 20
                }
            }
        })
        // stu = readonly(stu)
        // stu = shallowReadonly(stu)
        // sum = readonly(sum)
        // sum = shallowReadonly(sum)
        return {
            ...toRefs(stu),
            sum
        }
    }
}
</script>
<template>
    <div>
        <h2>当前的求和为{{ sum }}</h2>
        <button @click="sum++">点我sum+1</button>
        <hr>
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