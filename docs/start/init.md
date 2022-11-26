# 项目搭建

## 项目初始化

```bash
npm init vite@latest element-plus-source-code -- --template vue-ts
```

## 项目依赖分析

### czg

交互式命令行工具生成标准化的 git commit message

教程链接：[czg](https://cz-git.qbb.sh/zh/cli/install)

1. 安装

`npm i czg -g` 或 `npm i czg --dev`

2. 添加到 package.json

```json
{
  "script": {
    "cz": "czg"
  }
}
```

### vitest

`Vitest` 是一个由 `Vite` 提供支持的极速单元测试框架。[官方文档](https://cn.vitest.dev/guide/)

安装

`yarn add vitest --dev`

因为需要进行 `vue` 组件测试，所以需要可以模拟挂在 `vue` 组件，同时需要模拟 DOM

```bash
yarn add @vue/test-utils happy-dom --dev
```

在 `vitest.config.js` 中配置

```js
export default defaultConfig({
  test: {
    environment: 'happy-dom',
  },
})
```

详细的 `vue` 组件测试教程可[参考](https://juejin.cn/post/7129667747134308389#heading-11)

### prettier

使用脚本命令格式化所有文件代码

安装`npm i prettier -D`

package.json 中添加脚本

```json
{
  "scripts": {
    "fotmat": "prettier --write ."
  }
}
```
