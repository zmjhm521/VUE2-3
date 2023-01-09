<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <Student></Student>
    <School></School>
  </div>
</template>

<script>
// 引入Student组件
import Student from './components/Student.vue';
import School from './components/School.vue';
export default {
    name:'App',
    components:{
        Student,
        School
    },
    data(){
      return {
        msg:'你好呀',
      }
    },
}
</script>

<style>
.app{
  background-color: #bfa;
  padding: 5px;
}
</style>