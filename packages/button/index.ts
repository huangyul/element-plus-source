import { App } from 'vue'
import Button from './src/button.vue'
export default function (app: App) {
  app.component(Button.name, Button)
}
