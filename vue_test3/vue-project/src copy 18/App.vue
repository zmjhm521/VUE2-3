<template>
  <div>
    <button @click="getStudent">获取学生信息</button>
    <button @click="getCars">获取车辆信息</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'App',
    methods:{
      getStudent(){
        axios.get('http://localhost:5173/xuesheng/students').then(
          response =>{
            console.log('请求成功了',response.data);
          },
          error =>{
            console.log('请求失败了',error.message);
          }
        )
      },
      getCars(){
        axios.get('http://localhost:5173/api/cars').then(
          response =>{
            console.log('请求成功了',response.data);
          },
          error =>{
            console.log('请求失败了',error.message);
          }
        )
      }
    }
}
</script>

  /*base*/
  body {
    background: #fff;
  }
  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }

  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }

  .btn-edit {
    color: #fff;
    background-color: skyblue;
    border: 1px solid rgb(107, 205, 243);
    margin-right: 10px;
  }

  .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
  }

  .btn:focus {
    outline: none;
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