import { App } from 'vue'
import Divider from './src/index.vue'

export default function(app: App): void {
  app.component(Divider.name, Divider)
}
