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
        const stu = reactive({
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
        // 情况一：监视ref所定义的一个响应式数据
        // watch(n,(newValue,old)=>{
        //     console.log('n的值变了',newValue,old);
        // },{immediate:true})
        // 情况二：监视ref所定义的多个响应式数据
        // watch([n, msg], (newValue, old) => {
        //     console.log('n或msg的值变了', newValue, old);
        // })
        // 情况三：监视reactive所定义的响应式数据的全部属性
        // 注意此处无法正确的获取oldValue
        // 注意强制开启了深度监视(deep配置无效)
        // watch(stu,(newValue,old)=>{
        //     console.log('stu改变了',newValue,old);
        // })
        // 情况四:监视reactive所定义的响应式数据中的某个属性
        // watch(()=>stu.age,(newValue,old)=>{
        //     console.log('stu的age改变了',newValue,old);
        // })
        // 情况五:监视reactive所定义的响应式数据中的某些属性
        // watch([()=>stu.age,()=>stu.name],(newValue,old)=>{
        //     console.log('stu的age或name改变了',newValue,old);
        // })
        // 特殊情况
        // 监视reactive所定义的响应式数据中的job也是个对象
        watch(()=>stu.job,(newValue,old)=>{
            console.log('stu的job改变了',newValue,old);
        },{deep:true})//次相互由于监视的是reactive所定义中的某个属性，所以deep配置有效
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