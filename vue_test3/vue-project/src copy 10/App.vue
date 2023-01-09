<template>
  <div class="app">
    <h1>{{ msg }},{{ StudentName }}</h1>
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第一种写法，使用@或v-on) -->
    <!-- <Student @atguigu="showStudentName" @demo="m1"></Student> -->
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第二种写法，使用ref,更灵活) -->
    <Student ref="student" @click.native="show123"></Student>
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <School :showSchoolName="showSchoolName"></School>
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
        StudentName:''
      }
    },
    methods:{
      showSchoolName(name){
        console.log(name);
      },
      showStudentName(name){
        this.StudentName = name
      },
      m1(sex){
        console.log(sex);
      },
      show123(){
        alert(123456)
      }
    },
    mounted(){
      this.$refs.student.$on('atguigu',this.showStudentName)//绑定自定义事件
      // this.$refs.student.$on('atguigu',(name)=>{
      //   console.log(this);
      //   this.StudentName = name
      // })//绑定自定义事件
      // this.$refs.student.$once('atguigu',this.showStudentName)//绑定自定义事件（触发一次）
    }
}
</script>

<style>
.app{
  background-color: #bfa;
  padding: 5px;
}
</style>