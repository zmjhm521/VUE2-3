<script>
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from 'vue';
export default {
    name: 'demo',
    setup() {
        let n = ref(0)
        function add() {
            n.value++
        }
        console.log('---setup---');
        // 通过组合式API的形式去使用生命周期钩子
        onBeforeMount(()=>{
            console.log('---onBeforeMount---');
        })
        onMounted(()=>{
            console.log('---onMounted---');
        })
        onBeforeUpdate(()=>{
            console.log('---onBeforeUpdate---');
        })
        onUpdated(()=>{
            console.log('---onUpdated---');
        })
        onBeforeUnmount(()=>{
            console.log('---onBeforeUnmount---');
        })
        onUnmounted(()=>{
            console.log('---onUnmounted---');
        })
        return {
            n,
            add
        }

    },
    // 通过配置项的形式使用生命周期钩子
    //#region 
    // beforeCreate(){
    //     console.log('---beforeCreate---');
    // },
    // created(){
    //     console.log('---created---');
    // },
    // beforeMount(){
    //     console.log('---beforeMount---');
    // },
    // mounted(){
    //     console.log('---mounted---');
    // },
    // beforeUpdate(){
    //     console.log('---beforeUpdate---');
    // },
    // updated(){
    //     console.log('---updated---');
    // },
    // beforeUnmount(){
    //     console.log('---beforeUnmount---');
    // },
    // unmounted(){
    //     console.log('---unmounted---');
    // }
    //#endregion
}
</script>
<template>
    <div>
        <h2>当前和为{{ n }}</h2>
        <button @click="add">点我n+1</button>
    </div>
</template>
<style scoped>

</style>