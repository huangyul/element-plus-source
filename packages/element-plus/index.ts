import ElButton from '@element-plus/button';
import ElBadge from '@element-plus/badge';
import { App } from 'vue';

export { ElButton, ElBadge };

export default function (app: App) {
  ElButton(app);
  ElBadge(app);
}
