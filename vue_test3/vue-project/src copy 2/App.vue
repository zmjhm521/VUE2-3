<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showMsg">点我输出信息</button>
    <School ref="sch"></School>
  </div>
</template>

<script>
// 引入school组件
import School from './components/School.vue';
export default {
    name:'App',
    components:{
        School
    },
    data(){
        return {
            msg:"赵明杰"
        }
    },
    methods:{
        showMsg(){
            console.log(this.$refs.title);//真实DOM元素
            console.log(this.$refs.sch);//组件实例对象
        }
    }
}
</script>

<style>

</style>