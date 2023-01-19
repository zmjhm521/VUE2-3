<script>
import { ref, reactive,toRefs,toRaw,markRaw } from 'vue';
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
            },
        })
        function showRawPerson(){
            const p = toRaw(stu)
            p.age++
            console.log(p);
        }
        function addCar(){
            let car = {name:'奔驰',price:'40W'}
            stu.car = markRaw(car)
        }
        return {
            stu,
            ...toRefs(stu),
            sum,
            showRawPerson,
            addCar
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
        <h3 v-if="stu.car">座驾信息{{ stu.car }}</h3>
        <button @click="name += '@'">修改姓名</button>
        <button @click="age++">修改年龄</button>
        <button @click="job.j1.salary++">点我提薪</button>
        <button @click="showRawPerson">输出最原始的person</button>
        <button @click="addCar">给人添加一台车</button>
        <button v-if="stu.car" @click="stu.car.name='宝马'">换车名</button>
        <button v-if="stu.car" @click="stu.car.price='50W'">改价格</button>
    </div>
</template>
<style scoped>

</style>