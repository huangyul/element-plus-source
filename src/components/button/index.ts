import { App } from 'vue'
import Button from './src/button.vue'
export const install = function (app: App) {
  console.log(Button)
  app.component(Button.name, Button)
}
