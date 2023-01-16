<script>
import { ref, watch, reactive } from 'vue';
export default {
    name: 'demo',
    // watch:{
    //     // 简单写法
    //     // n(newValue,old){
    //     //     console.log('n的值变了',newValue,old);
    //     // }
    //     // 完整写法
    //     // n:{
    //     //     immediate:true,
    //     //     deep:true,
    //     //     handler(newValue,old){
    //     //         console.log('n的值变了',newValue,old);
    //     //     }
    //     // }
    // },
    setup() {
        let msg = ref('你好呀')
        let n = ref(0)
        const stu = ref({
            name: '赵明杰',
            age: 18,
            job: {
                j1: {
                    salary: 20
                }
            }
        })
        function update() {
            msg.value = '666'
        }
        function add() {
            n.value++
        }
        watch(stu,(newValue,oldValue)=>{
            console.log(newValue,oldValue);
        },{deep:true})
        return {
            n,
            msg,
            update,
            add,
            stu
        }

    }
}
</script>
<template>
    <div>
        <h2>当前和为{{ n }}</h2>
        <button @click="add">点我n+1</button>
        <br>
        <h2>当前信息为{{ msg }}</h2>
        <button @click="update">修改信息</button>
        <h2>姓名{{ stu.name }}</h2>
        <h2>年龄{{ stu.age }}</h2>
        <button @click="stu.name += '@'">修改姓名</button>
        <button @click="stu.age++">修改年龄</button>
        <h2>薪资{{ stu.job.j1.salary }}k</h2>
        <button @click="stu.job.j1.salary++">点我提薪</button>
    </div>
</template>
<style scoped>

</style>