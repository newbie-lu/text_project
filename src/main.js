import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/reset.css"
import "./assets/common.scss"
import './assets/iconfont/iconfont.css'
// 全局引入antd
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.use(Antd);

// 局部导入组件
// import Button from 'ant-design-vue/lib/button';
// import 'ant-design-vue/dist/antd.css';
// Vue.use(Button);

Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
