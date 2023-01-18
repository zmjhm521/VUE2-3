import { onBeforeUnmount, onMounted, reactive } from 'vue';

export default function (){
    // 实现鼠标“打点”的数据
    let point = reactive({
        x: 0,
        y: 0
    })
    // 实现鼠标“打点”的方法
    function savePoint(event) {
        console.log(event);
        point.x = event.clientX
        point.y = event.clientY
    }
    // 实现鼠标“打点”的生命周期钩子
    onMounted(() => {
        window.addEventListener('click',savePoint)
    })
    onBeforeUnmount(() => {
        window.removeEventListener('click',savePoint)
    })
    return point
}

