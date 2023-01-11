<template>
  <div class="container">



    <Category title="游戏">
      <template slot-scope="data" slot="hello">
        <ul>
          <li v-for="(game, index) in data.games" :key="index">{{ game }}</li>
        </ul>
      </template>
    </Category>

    <Category title="游戏">
      <template slot-scope="data" slot="hello">
        <ol>
          <li style="color:red" v-for="(game, index) in data.games" :key="index">{{ game }}</li>
        </ol>
      </template>
    </Category>

    <Category title="游戏">
      <template slot-scope="{games}" slot="hello">
        <ul>
          <h4 v-for="(game, index) in games" :key="index">{{ game }}</h4>
        </ul>
      </template>
    </Category>

  </div>
</template>

<script>
import Category from './components/Category.vue'
export default {
  name: 'App',
  components: { Category }
}
</script>
<style scoped>
.container {
  display: flex;
  justify-content: space-around;
}
</style>
