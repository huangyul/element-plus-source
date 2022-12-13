import ElButton from '@element-plus/button';
import ElBadge from '@element-plus/badge';
import ElTag from '@element-plus/tag';
import { App } from 'vue';

export { ElButton, ElBadge };

export default function(app: App) {
  ElButton(app);
  ElBadge(app);
  ElTag(app);
}
