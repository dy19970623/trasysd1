import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import * as Cesium from 'cesium/Cesium'
import * as widgets from 'cesium/Widgets/widgets.css'
import * as vueJsonp from 'vue-jsonp'

require('echarts-extension-amap')
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.prototype.cesium = Cesium
Vue.prototype.widgets = widgets
Vue.use(ElementUI);
Vue.use(vueJsonp)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
