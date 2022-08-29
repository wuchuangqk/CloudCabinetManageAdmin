import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from "pinia";
import router from './router/index'
import './router/interceptor'
import 'nprogress/nprogress.css' // progress bar style
import ElementPlus from 'element-plus'
import 'normalize.css/normalize.css'
import 'element-plus/dist/index.css'
import '@/styles/index.scss'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.mount('#app')
