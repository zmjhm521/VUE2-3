<script setup>
import { ref, reactive, computed } from 'vue';
const stu = reactive({
    firstName: '张',
    lastName: '三',
})
// 计算属性（没有考虑计算属性被修改的情况）
// stu.name = computed(()=>{
//     return stu.firstName + stu.lastName
// })
// 计算属性--完整写法（考虑读和写）
stu.name = computed({
    get(){
        return stu.firstName + stu.lastName
    },
    set(value){
        // const nameArr = value.split('-')
        // stu.firstName = nameArr[0]
        // stu.lastName = nameArr[1]
        stu.firstName = value[0]
        stu.lastName = value.slice(1)
    },
})
</script>
<template>
    <div>
    <h2>姓<input type="text" v-model="stu.firstName"></h2>
    <h2>名<input type="text" v-model="stu.lastName"></h2>
    姓名<input type="text" v-model="stu.name">
    </div>
</template>
<style scoped>

</style>