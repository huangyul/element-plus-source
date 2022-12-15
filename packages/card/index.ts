import { App } from 'vue';
import Card from './src/index.vue';

export default function(app: App): void {
  app.component(Card.name, Card);
}
