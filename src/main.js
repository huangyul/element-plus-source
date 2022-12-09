import { createApp } from 'vue'
import { installAll } from './component'
import './style/element-ui@2.13.2.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
installAll(app)
app.use(router)
app.mount('#app')
