import { App } from 'vue';
import ElTag from './src/index.vue';

export default (app: App) => {
  app.component(ElTag.name, ElTag);
};
