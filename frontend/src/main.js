import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrp'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORARIO
require('axios').defaults.headers.common['Authorization']= 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ikpvw6NvIiwiZW1haWwiOiJKb2FvQG1haWwuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTY4NzYxMDk0OSwiZXhwIjoxNjg3ODcwMTQ5fQ._CUdamBZoFsldT_brty81fJMnK65rS7m4w01IxuQaH4'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')