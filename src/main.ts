import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import setupPinia from './stores'

const app = createApp(App)

setupPinia(app)

app.mount('#app')
