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
