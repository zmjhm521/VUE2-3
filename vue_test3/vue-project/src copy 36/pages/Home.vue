<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
        </li>
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
        </li>
      </ul>
      <!-- include 后为组件名 -->
      <!-- <keep-alive :include="['News','Message']"> -->
      <keep-alive include="News"> 
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  // beforeDestroy(){
  //   console.log('Home组件即将被销毁了');
  // },
  // mounted(){
  //   console.log('Home组件挂载完毕');
  // }
  mounted() {
    console.log(this);
  }
}
</script>

<style>

</style>