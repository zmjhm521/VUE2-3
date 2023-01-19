<script setup>
import { ref, customRef } from 'vue';
// let keyWord = ref('hello')//使用Vue提供的内置的ref
// 自定义一个ref——名为：myRef
function myRef(value,delay) {
    let timer
    return customRef((track, trigger) => {
        return {
            get() {
                track()//通知Vue追踪数据的变化（提前和get商量一下，让他认为这个value是有用的）
                return value
            },
            set(newValue) {
                clearTimeout(timer)
                timer = setTimeout(() => {
                    value = newValue
                    trigger()
                }, delay);
                // trigger()//通知Vue去重新解析模板
            }
        }
    })
}
let keyWord = myRef('hello',500)//使用程序员自定义的ref
</script>

<template>
    <div>
        <input type="text" v-model="keyWord">
        <h4>{{ keyWord }}</h4>
    </div>
</template>

<style scoped>

</style>
