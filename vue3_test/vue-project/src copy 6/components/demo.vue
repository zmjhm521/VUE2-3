<script>
import { reactive,toRef,toRefs } from 'vue';
export default {
    name: 'demo',
    setup() {
        const stu = reactive({
            name: '赵明杰',
            age: 18,
            job: {
                j1: {
                    salary: 20
                }
            }
        })
        // const name1 = stu.name
        // console.log(name1);
        // const name = toRef(stu,'name')
        // console.log(name2);
        // const obj = toRefs(stu)
        // console.log(obj);
        return {
            ...toRefs(stu)
            // name:toRef(stu,'name'),
            // age:toRef(stu,'age'),
            // salary:toRef(stu.job.j1,'salary'),
        }

    }
}
</script>
<template>
    <div>
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