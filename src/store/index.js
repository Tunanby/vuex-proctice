import Vue from "vue"
import vuex from "vuex"
Vue.use(vuex)

const store = new vuex.Store({
    state: {
        count: 1
    },
    getters: {
       getCount(state) {
            return state.count + 1
       }
    },
    mutations: {
        increment (state) {
            state.count = state.count + 1
        },
        decrement (state) {
            state.count = state.count - 1
        }
    },
    actions: {
      increment(context) {
        context.commit('increment')
      },
      decrement(context) {
        context.commit('decrement')
      }
    }
})
export default store