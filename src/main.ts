import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import '@/mock/index.ts'

const app = createApp(App)

// 使用路由
app.use(router)

// 使用pinia
app.use(createPinia())

app.mount('#app')
