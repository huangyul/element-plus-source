import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Element plus 源码学习',
  themeConfig: {
    // 顶部导航栏
    nav: [
      {
        text: '文档',
        link: '/guide',
        activeMatch: '/guide/what-is-vitepress',
      },
      {
        text: '下拉选择框',
        items: [
          { text: 'options-1', link: '/' },
          { text: 'options-2', link: '/theme' },
        ],
      },
    ],
    // 社交链接
    socialLinks: [{ icon: 'github', link: 'https://github.com' }],
    // 侧边菜单栏
    sidebar: [
      {
        text: '简介',
        items: [{ text: '思考', link: '/why/index.md' }],
      },
      {
        text: '开始',
        items: [{ text: '项目搭建', link: '/start/init.md' }],
      },
    ],
    docFooter: { prev: '上一篇', next: '下一篇' },
    // 国际化切换下拉框
    // localeLinks: {
    //   items: [
    //     { text: '简体中文', link: '/' },
    //     { text: 'English', link: '/en' },
    //   ],
    // },
  },
  // 打包出口
  // outDir: '../dist'

  // 国际化
  // locales: {
  //   '/': {
  //     lang: 'zh-CN',
  //     title: '自定义的 title',
  //     description: '自定义的 description',
  //   },
  //   '/en/': {
  //     lang: 'en-US',
  //     title: 'Custom title',
  //     description: 'Custom description',
  //   },
  // },
})
