import { createApp } from 'vue'
import App from './App.vue'
import ZIONUI from '../packages/index'

// createApp(App).use(ZIONUI).mount('#app')
import '../packages/style/index.scss'
const app = createApp(App)
app.use(ZIONUI)
app.mount('#app')
