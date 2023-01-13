<template>
    <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
            <h2>Vue Router Demo</h2>
            <button @click="back">后退</button>
            <button @click="forward">前进</button>
            <button @click="go">测试一下go</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Banner',
    methods:{
        back(){
           this.$router.back()
        },
        forward(){
            this.$router.forward()
        },
        go(){
            // 参数和前进后退的步数有关，前进为正，后退为负
            this.$router.go(-2)
        }
    }
}
</script>

<style>

</style>