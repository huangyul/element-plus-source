import { App } from 'vue'
import ElBadge from './src/index.vue'

export default (app: App) => {
  app.component(ElBadge.name, ElBadge)
}
