<template>
    <li>
        <label>
            <!-- 该地方使用click和change都可以 -->
            <!-- v-model中不要修改prop传过来的值 -->
            <input 
                type="checkbox" 
                :checked="todo.done" 
                @click="handleCheck(todo.id)"
            />
            <!-- v-model中不要修改prop传过来的值 -->
            <!-- <input type="checkbox"
                v-model="todo.done"> -->
            <span>{{ todo.title }}</span>
        </label>
        <button class="btn btn-danger" @click="remove(todo.id)">删除</button>
    </li>
</template>

<script>
export default {
    name: 'Item',
    // 声明接受todo对象
    props:['todo'],
    methods:{
        // 勾选
        handleCheck(id){
            // 通知App组件将对应的todo对象的done值取反
            this.$bus.$emit('checkTodo',id)
        },
        // 删除
        remove(id){
            if(confirm('确认取消吗')){
                this.$bus.$emit('shanchu',id)
            }
        }
    }
}
</script>

<style scoped>
    /*item*/
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }

    li label {
        float: left;
        cursor: pointer;
    }

    li label li input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }

    li button {
        float: right;
        display: none;
        margin-top: 3px;
    }

    li:before {
        content: initial;
    }

    li:last-child {
        border-bottom: none;
    }
    li:hover{
        background-color: #ddd;
    }
    li:hover button{
        display: block;
    }
</style>