<template>
  <div id="root">
  <div class="todo-container">
    <div class="todo-wrap">
      <MyHeader :addTodo="addTodo"></MyHeader>
      <List :todos="todos" :checkTodo="checkTodo"></List>
      <MyFooter></MyFooter>
    </div>
  </div>
</div>
</template>

<script>
// 引入Student组件
import MyHeader from './components/MyHeader.vue';
import List from './components/List.vue';
import MyFooter from './components/MyFooter.vue';
export default {
    name:'App',
    components:{
        MyHeader,
        List,
        MyFooter
    },
    data(){
        return {
            todos:[
                {id:'1',title:'吃饭',done:true},
                {id:'2',title:'睡觉',done:false},
                {id:'3',title:'打豆豆',done:true},
            ]
        }
    },
    methods:{
      addTodo(todoObj){
        this.todos.unshift(todoObj)
      },
      checkTodo(id){
        this.todos.forEach((todo)=>{
          if(todo.id === id) todo.done = !todo.done
        })
      }
    }
}
</script>

<style>
  /*base*/
  body {
    background: #fff;
  }

  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>