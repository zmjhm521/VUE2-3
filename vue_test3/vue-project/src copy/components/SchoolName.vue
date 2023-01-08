<script>
// 组件交互相关的代码
// 创建school组件
export default {
    name:'school',
    data() {
        return {
            schoolName: '尚硅谷',
            address: '北京',
        }
    },
    methods: {
        showName() {
            alert(this.schoolName)
        }
    }
}
</script>
<template>
    <div class="demo">
        <h1>学校名称：{{ schoolName }}</h1>
        <h1>学校地址：{{ address }}</h1>
        <button @click="showName">点我提示学校名</button>
    </div>
    <!-- 组件的结构 -->
</template>
<style>
/* 组件的样式 */
    .demo {
        background-color: orange;
    }
</style>
