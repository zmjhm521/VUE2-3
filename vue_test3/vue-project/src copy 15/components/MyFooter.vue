<template>
  <div class="todo-footer" v-if="todos.length">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @click="all" /> -->
      <input type="checkbox" v-model="isAll" />

    </label>
    <span>
      <span>已完成{{ finished }}</span> / 全部{{ todos.length }}
    </span>
    <button class="btn btn-danger" @click="removeFinish">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: 'MyFooter',
  props: ['todos'],
  computed: {
    finished: function () {
      // return this.todos.reduce((pre,current)=>{
      //   console.log('@',pre,current)
      //   return pre + (current.done ? 1:0)
      // },0)
      return this.todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
    },
    isAll: {
      get() {
        return this.finished === this.todos.length && this.todos.length > 0
      },
      set(value) {
        this.$emit('quanxuan',value)
      }
    }
  },
  // methods: {
  //   all(e) {
  //     this.quanxuan(e.target.checked)
  //   }
  // }
  methods:{
    removeFinish(){
      if(confirm('确认取消吗')){
      this.$emit('qingchuwancheng')
      }
    }
  }
}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>