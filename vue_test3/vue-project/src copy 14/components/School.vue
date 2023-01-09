<template>
    <div class="school">
        <h2>学校名称：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name: 'School',
    data() {
        return {
            name:"尚硅谷西北大学",
            address:"北京"
        }
    },
    methods:{
        demo(msgName,data){
            console.log('有人发布了hello 消息,hello消息的回调执行了',msgName,data);
        }
    },
    mounted(){
        // 第三种
        // this.$bus.$on('hello',(data)=>{
        //     console.log('我是student组件,收到了数据',data);
        // })
        //第一种
        // this.pubId = pubsub.subscribe('hello',(msgName,data)=>{
        //     console.log('有人发布了hello 消息,hello消息的回调执行了',msgName,data);
        // })
        //第二种
        this.pubId = pubsub.subscribe('hello',this.demo)
    },
    beforeDestroy(){
        // this.$bus.$off('hello')
        pubsub.unsubscribe(this.pubId)
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
