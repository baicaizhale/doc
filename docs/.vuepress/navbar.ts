import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  {
    text: '文档',
    items: [
      { text: '示例', link: '/notes/demo/README.md' }
    ]
  },
  { text: '帮助', link: '/help/' } // 改为自动生成help笔记
])
