<template>
    <div>
        <h1>当前求和是{{ sum }}</h1>
        <h2>当前求和放大10倍为:{{ bigSum }}</h2>
        <h3>我在{{ school }}，学习{{ subject }}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">当前求和为奇数再加</button>
        <button @click="incrementWait(n)">等一会再加</button>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
    name: 'Count',
    data() {
        return {
            n: 1,
        }
    },
    computed: {
        ...mapState(['sum', 'school', 'subject']),
        ...mapGetters(['bigSum'])
    },
    mounted() {
    },
    // 使用vuex生成的方法时，注意带参数
    methods: {
        // 程序员亲自写方法
        // increment() {
        //     this.$store.commit('JIA', this.n)
        // },
        // decrement() {
        //     this.$store.commit('JIAN', this.n)
        // },
        // 借助mapMutations生成对应的方法，方法中会调用commit去联系Mutations（对象）
        ...mapMutations({ increment: 'JIA', decrement: 'JIAN' }),
        // 借助mapMutations生成对应的方法，方法中会调用commit去联系Mutations（数组）
        // ...mapMutations(['JIA','JIAN']),
        
        // 程序员亲自写方法
        // incrementOdd() {
        //     this.$store.dispatch('jiaOdd', this.n)
        // },
        // incrementWait() {
        //     this.$store.dispatch('jiaWait', this.n)
        // },
        // 借助mapActions生成对应的方法，方法中会调用dispatch去联系Actions
        ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'}),

    }
}
</script>

<style scoped>
button {
    margin-left: 5px;
}
</style>
