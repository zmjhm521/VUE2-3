<template>
    <li>
        <label>
            <!-- 该地方使用click和change都可以 -->
            <input 
                type="checkbox" 
                :checked="todo.done" 
                @click="handleCheck(todo.id)"
            />
            <span>{{ todo.title }}</span>
        </label>
        <button class="btn btn-danger" style="display:none">删除</button>
    </li>
</template>

<script>
export default {
    name: 'Item',
    // 声明接受todo对象
    props:['todo','checkTodo'],
    methods:{
        handleCheck(id){
            this.checkTodo(id)
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
</style>