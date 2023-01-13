import Vue from "vue";
import App from "./App.vue"

Vue.config.productionTip = false
Vue.config.devtools = true
// 引入插件
import vueResource from 'vue-resource'
import store from "./store";
// 使用插件
Vue.use(vueResource)

new Vue({
    el: '#app',
    render: h => h(App),
    store,
    beforeCreate(){
        Vue.prototype.$bus = this
    }
})
