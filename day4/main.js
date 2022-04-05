import App from './App'
// 全局导入组件
// import pageHead from './components/page-head.vue'
import store from './store'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif

Vue.prototype.$websiteUrl = 'http://localhost:3000';
// 全局注册组件
// Vue.component('page-head', pageHead);

Vue.prototype.$store = store;