export default{
    install(Vue){
        // 全局过滤器
        Vue.filter('mySlice',function(value){
            return value.slice(0,4)
        })
        // 全局指令
        Vue.directive('fbind', {
            // 指令与元素成功绑定时
            bind(element, binding) {
                element.value = binding.value
            },
            // 指令所在元素被插入页面时
            inserted(element, binding) {
                element.focus()
            },
            // 指令所在的模板被重新解析时
            update(element, binding) {
                element.value = binding.value
                // element.focus()
            }
        })
        // 定义混入
        Vue.mixin({
            data(){
                return {
                    x:100,
                    y:200
                }
            }
        })
        // vue原型上添加方法(vm,vc都可以使用该方法)
        Vue.prototype.hello = ()=>{alert('hello world')}
    }
}