<template>
    <div class="demo">
        <h2>学生姓名：{{ name }}</h2>
        <h2>学生性别：{{ sex }}</h2>
        <input type="text" v-fbind:value="name">
        <button @click="hello">点我测试hello</button>
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
