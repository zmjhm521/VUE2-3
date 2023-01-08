<template>
    <div class="demo">
        <h2 @click="showName">学生姓名：{{ name }}</h2>
        <h2>学生性别：{{ sex }}</h2>
    </div>
</template>

<script>
// 引入一个混合
// import { mixin } from '../mixin';
export default {
    name: 'Student',
    data() {
        return {
            name:"赵明杰",
            sex:"男"
        }
    },
    // mixins:[mixin]
}
</script>
