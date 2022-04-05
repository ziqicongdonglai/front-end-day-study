import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        isLogin: false // 是否登录的状态，默认为未登录 false
    },
    mutations: {
        // 定义一个操作isLogin状态的方法
        storeLogin(state, payload) {
            state.isLogin = payload;
        }
    }
})

export default store