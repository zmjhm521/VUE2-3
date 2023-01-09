<template>
    <div class="school">
        <h2>学校名称：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
    </div>
</template>

<script>
export default {
    name: 'School',
    data() {
        return {
            name:"尚硅谷西北大学",
            address:"北京"
        }
    },
    mounted(){
        this.$bus.$on('hello',(data)=>{
            console.log('我是student组件,收到了数据',data);
        })
    },
    beforeDestroy(){
        this.$bus.$off('hello')
    }
}
</script>
<style>
.school{
    background-color: skyblue;
    padding: 5px;
    margin-top: 30px;
}
</style>
