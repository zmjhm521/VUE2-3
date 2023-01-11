<template>
    <div class="category">
        <h3>{{ title }}分类</h3>
        
        <slot name="hello">
            <ul>
                <li v-for="(game, index) in games" :key="index">{{ game }}</li>
            </ul>
        </slot>
    </div>
</template>

<script>
export default {
    name: 'Category',
    props: ['games', 'title']
}
</script>

<style>
.category {
    background-color: #bfa;
    width: 200px;
    height: 300px;
}

h3 {
    text-align: center;
    background-color: tomato;
}
img {
  width: 80%;
  display: flex;
  margin: 0 auto;
}
</style>