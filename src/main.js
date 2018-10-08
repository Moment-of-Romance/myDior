// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'; //引入ivew
import 'iview/dist/styles/iview.css';//引入iview 的样式
import MintUI from 'mint-ui' //引入mint-ui
import 'mint-ui/lib/style.css' //导入 mint-ui 样式


//导入 mui 样式
import './lib/mui/css/mui.min.css'
//导入扩展字体图标
import './lib/mui/css/icons-extra.css'


//注册iview
Vue.use(iView)
//注册mint-ui
Vue.use(MintUI)

//设置为false 阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
