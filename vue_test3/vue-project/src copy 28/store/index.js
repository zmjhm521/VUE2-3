// 该文件用于创建vuex中最为核心的store
// 引入Vue
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
// 使用Vuex插件
Vue.use(Vuex)
// 引入相关配置对象
import countOption from './count'
import PersontOption from './person'





// 创建并导出store
export default new Vuex.Store({
    modules:{
        countAbout:countOption,
        personAbout:PersontOption
    }
})

