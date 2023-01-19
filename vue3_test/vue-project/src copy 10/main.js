// 引入的不再是vue构造函数，引入的是一个名为createApp工厂函数
import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

// 创建应用实例对象--app（类似与之前Vue2中的vm,但app比vm更轻）
const app = createApp(App)
app.mount('#app')

// const vm = new Vue({
//     render:(h)=>{
//         return h(app)
//     }
// })
// vm.$mount('#app')