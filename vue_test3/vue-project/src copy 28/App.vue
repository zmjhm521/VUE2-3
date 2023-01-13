<template>
  <div>
    <Count></Count>
    <hr>
    <Person></Person>
  </div>
</template>

<script>
import Count from './components/Count.vue'
import Person from './components/Person.vue';
export default {
  name: 'App',
  components: { Count,Person },
  mounted(){
    // console.log('APP组件',this);
  }
}
</script>
<style scoped>
</style>
