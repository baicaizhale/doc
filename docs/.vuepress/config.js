import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  theme: hopeTheme({
    // 主题配置
    logo: "/logo.ico", // 网站 Logo
    repo: "https://github.com/baicaizhale/doc", // GitHub 仓库链接
    navbar: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guide/" },
      { text: "关于", link: "/about/" },
    ],
    sidebar: {
      "/guide/": [
        "",
        "getting-started",
        "configuration",
        "deploy",
      ],
    },
  }),
  bundler: viteBundler(),
});
