import ElButton from '@element-plus/button'
import ElBadge from '@element-plus/badge'
import ElTag from '@element-plus/tag'
import ElDivider from '@element-plus/divider'
import ElCard from '@element-plus/card'
import { App } from 'vue'

export { ElButton, ElBadge, ElTag, ElDivider, ElCard }

export default function(app: App): void {
  ElButton(app)
  ElBadge(app)
  ElTag(app)
  ElDivider(app)
  ElCard(app)
}
