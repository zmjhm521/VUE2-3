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
            <span v-show="!todo.isEdit">{{ todo.title }}</span>
            <input 
                v-show="todo.isEdit" 
                type="text" 
                :value="todo.title" 
                @blur="handleBlur(todo,$event)"
                ref="inputTitle">
        </label>
        <button class="btn btn-danger" @click="remove(todo.id)">删除</button>
        <button v-show="!todo.isEdit" class="btn btn-edit" @click="HandleEdit(todo)">编辑</button>
    </li>
</template>

<script>
import pubsub from 'pubsub-js';
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
                // this.$bus.$emit('shanchu',id)
                pubsub.publish('shanchu',id)
            }
        },
        //编辑
        HandleEdit(todo){
            if(todo.hasOwnProperty('isEdit')){
                todo.isEdit = true
            } else{
                this.$set(todo,todo.isEdit = true)
            }
            // 在下一次DOM更新后执行指定的回调
            // this.$nextTick(()=>{
            //     this.$refs.inputTitle.focus()
            // })
            setTimeout(() => {
                this.$refs.inputTitle.focus()
            }, );
        },
        // 失去焦点回调（真正执行修改逻辑）
        handleBlur(todo,e){
            todo.isEdit = false
            // console.log(e.target.value);
            if(!e.target.value.trim()) return alert('输入不能为空')
            this.$bus.$emit('updateTodo',todo.id,e.target.value)
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