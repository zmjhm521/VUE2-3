<template>
  <div>
    <Count></Count>
  </div>
</template>

<script>
import Count from './components/Count.vue'
export default {
  name: 'App',
  components: { Count },
  mounted(){
    // console.log('APP组件',this);
  }
}
</script>
<style scoped>
</style>
