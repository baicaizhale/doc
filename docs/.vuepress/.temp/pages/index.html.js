import comp from "/home/baicaizhale/doc/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"tagline\":\"这里是我的知识库，记录了我的学习笔记、项目经验和一些有趣的内容。\",\"actions\":[{\"text\":\"快速开始 →\",\"link\":\"/guide/\",\"type\":\"primary\"}],\"features\":[{\"title\":\"一些有关的文档\",\"details\":\"清晰的分享我的笔记。\"}],\"footer\":\"Copyright © 2025 baicaizhale\"},\"readingTime\":{\"minutes\":0.22,\"words\":65},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
