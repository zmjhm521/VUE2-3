import axios from 'axios'
import { nanoid } from 'nanoid'
// 人员管理相关的配置
export default {
    namespaced: true,
    actions: {
        addPersonWang(contex, value) {
            if (value.name.indexOf('王') === 0) {
                contex.commit('ADD_PERSON', value)
            } else {
                alert('添加的人必须姓王')
            }
        },
        addPersonServe(context) {
            axios.get('http://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    context.commit('ADD_PERSON', { id: nanoid(),name:response.data.split('').slice(0,3).join('') })
                },
                error =>{
                    alert(error.message)
                }
            )
        }
    },
    mutations: {
        ADD_PERSON(state, value) {
            console.log('mutations中的ADD_PERSON被调用了');
            state.personList.unshift(value)
        }
    },
    state: {
        personList: [
            { id: '001', name: '赵明杰' },
            { id: '002', name: '侯靖琪' }
        ]
    },
    getters: {
        firstPersonName(state) {
            return state.personList[0].name
        }
    },
}
