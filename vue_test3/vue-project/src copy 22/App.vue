<template>
  <div class="container">

    <Category title="美食">
      <template #hello>
        <img src="../images/1.jpeg" alt="">
      </template>
    </Category>


    <Category title="游戏" :games="games"></Category>


    <Category title="电影">
      <template #hello>
        <img src="../images/2.jpeg" alt="">
      </template>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category.vue'
export default {
  name: 'App',
  components: { Category },
  data() {
    return {
      foods: ['火锅', '烧烤', '大盘鸡', '红烧肉'],
      games: ['红警', '魔兽', 'LOL', '鹅鸭杀'],
      films: ['教父', '战狼', '流浪地球', '柯南'],
    }
  }
}
</script>
<style scoped>
.container {
  display: flex;
  justify-content: space-around;
}
</style>
