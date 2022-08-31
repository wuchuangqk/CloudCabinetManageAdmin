import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from "pinia";
import router from './router/index'
import './router/interceptor'
import ElementPlus from 'element-plus'
import '@/styles/index.scss'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.mount('#app')
