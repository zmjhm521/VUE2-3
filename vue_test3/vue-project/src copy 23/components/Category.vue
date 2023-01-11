<template>
    <div class="category">
        <h3>{{ title }}分类</h3>

        <slot name="hello" :games="games" msg="hello">我是默认的内容</slot>
    </div>
</template>

<script>
export default {
    name: 'Category',
    props: ['title'],
    data() {
        return {
            games: ['红警', '魔兽', 'LOL', '鹅鸭杀'],
        }
    }
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
    width: 75%;
    display: flex;
    margin: 0 auto;
}

a {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>