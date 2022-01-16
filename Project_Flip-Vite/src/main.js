import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

import './index.css'

createApp(App).use(router).use(store).mount('#app')

Vue.use(VeeValidate)

// setup fake backend
import { configureFakeBackend } from './backend/accounts/_helpers/helper_export.js'
configureFakeBackend()
