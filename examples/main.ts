import { createApp } from 'vue'
import App from './App.vue'
import ZIONUI from '../packages/index'

import '../packages/style/index.scss'
const app = createApp(App)
app.use(ZIONUI)
app.mount('#app')

