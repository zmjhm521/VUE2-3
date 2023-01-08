<template>
    <div class="demo">
        <h2 class="h">学生姓名：{{ name }}</h2>
        <h2>学生性别：{{ sex }}</h2>
    </div>
</template>

<script>
export default {
    name: 'Student',
    data() {
        return {
            name:"赵明杰",
            sex:"男"
        }
    },
}
</script>
<!-- scoped指定当前作用域 -->
<style lang="less" scoped>
.demo{
    background-color: red;
    .h{
        font-size: 50px;
    }
}
</style>
