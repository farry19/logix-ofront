import Vue from 'vue'
import axios from 'axios'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import { GridPlugin } from '@syncfusion/ej2-vue-grids'

import '../node_modules/@syncfusion/ej2-base/styles/material.css'
import '../node_modules/@syncfusion/ej2-buttons/styles/material.css'
import '../node_modules/@syncfusion/ej2-calendars/styles/material.css'
import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css'
import '../node_modules/@syncfusion/ej2-inputs/styles/material.css'
import '../node_modules/@syncfusion/ej2-navigations/styles/material.css'
import '../node_modules/@syncfusion/ej2-popups/styles/material.css'
import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css'
import '../node_modules/@syncfusion/ej2-vue-grids/styles/material.css'

import { getAuthToken } from './utils/auth'

Vue.use(GridPlugin)

axios.defaults.baseURL = process.env.VUE_APP_API_URL

axios.interceptors.request.use(req => {
  req.headers.authorization = `Bearer ${getAuthToken()}`
  return req
})
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
