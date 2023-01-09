<template>
    <div class="student">
        <h2>学生姓名：{{ name }}</h2>
        <h2>学生性别：{{ sex }}</h2>
        <h2>当前求和为：{{ number }}</h2>
        <button @click="add">点我number++</button>
        <button @click="sendStudentName">点我获取学生名</button>
        <button @click="unbind">解绑atguigu事件</button>
        <button @click="show">触发App中demo事件</button>
        <button @click="death">销毁当前Student组件的实例(vc)</button>
    </div>
</template>

<script>
export default {
    name: 'Student',
    data() {
        return {
            name:"赵明杰",
            sex:"男",
            number:0
        }
    },
    methods:{
        add(){
            console.log('add回调被调用了');
            this.number++
        },
        sendStudentName(){
            // 触发Student组件实例身上的atguigu事件
            this.$emit('atguigu',this.name)
            // this.$emit('click')
        },
        unbind(){
            this.$off('atguigu')//解绑一个自定义事件
            // this.$off(['atguigu','demo'])//解绑一个自定义事件
            // this.$off()//解绑所有自定义事件
        },
        show(){
            this.$emit('demo',this.sex)
        },
        death(){
            this.$destroy()//销毁了当前Student组件实例，销毁后组件上的自定义事件都被销毁了
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
