<template>
    <div class="school">
        <h2>学校名称：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
        <button @click.once="sendSchoolName">点击显示学校名</button>
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
    props:['showSchoolName'],
    methods:{
        sendSchoolName(){
           this.showSchoolName(this.name)
        }
    },
}
</script>
<style>
.school{
    background-color: skyblue;
    padding: 5px;
    margin-top: 30px;
}
</style>
