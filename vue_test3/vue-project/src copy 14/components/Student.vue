<template>
    <div class="student">
        <h2>学生姓名：{{ name }}</h2>
        <h2>学生性别：{{ sex }}</h2>
        <button @click="sendStudentName">把学生名给School组件</button>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name: 'Student',
    data() {
        return {
            name:"赵明杰",
            sex:"男",
        }
    },
    methods:{
        sendStudentName(){
            pubsub.publish('hello',this.name)
            // this.$bus.$emit('hello',this.name)
        }
    }
}
</script>
<!-- scoped指定当前作用域 -->
<style lang="less" scoped>
.student{
    background-color: red;
    padding: 5px;
}
</style>
