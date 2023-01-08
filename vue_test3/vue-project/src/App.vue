<template>
  <div>
    <Student name="赵明杰" sex="男" :age="20"></Student>
    <hr>
    <Student></Student>
  </div>
</template>

<script>
// 引入Student组件
import Student from './components/Student.vue';
export default {
    name:'App',
    components:{
        Student
    }
}
</script>

<style>

</style>