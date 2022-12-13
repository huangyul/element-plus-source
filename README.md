# Element-plus

## 基础架构

## 组件开发

### tag

```vue
<div>
  <slot></slot>
</div>
```

#### 基础使用

通过 type 设置 tag 的类型，可设置类型是 default warngin 等等，实现方式是通过定义好的类名，通过动态类名去实现

```vue
<div :class="[" `el-tag-${type}` ]></div>

<style>
.el-tag-xxx {
  /* ... */
}
</style>
```
