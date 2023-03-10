import Vue from 'vue'
import App from "./App.vue"
// 引入VueRouter
import VueRouter from 'vue-router'
// 引入路由器
import router from './router'
Vue.config.productionTip = false
// 使用VueRouter
Vue.use(VueRouter)

new Vue({
    el: '#app',
    render: h => h(App),
    router
})
