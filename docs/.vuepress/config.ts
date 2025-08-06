import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
    base: '/',
    lang: 'zh-CN',
    title: '辞舟咽雪的文档库',
    description: '一个简约的文档库',

    head: [
        // 配置站点图标
        ['link', { rel: 'icon', type: 'image/png', href: 'https://i.miji.bid/2025/04/19/fe60abc468232a0b42d27bf5ec85831c.png' }],
    ],

    bundler: viteBundler(),
    shouldPrefetch: false, // 站点较大，页面数量较多时，不建议启用

    theme: plumeTheme({
        /* 添加您的部署域名, 有助于 SEO, 生成 sitemap */
        // hostname: 'https://your_site_url',

        /* 文档仓库配置，用于 editLink */
        // docsRepo: '',
        // docsDir: 'docs',
        // docsBranch: '',

        /* 页内信息 */
        // editLink: true,
        // lastUpdated: true,
        // contributors: true,
        // changelog: false,

        /**
         * 博客
         * @see https://theme-plume.vuejs.press/config/basic/#blog
         */
        blog: true, // 禁用博客

        /* 博客文章页面链接前缀 */
        article: '/article/',

        /**
         * 编译缓存，加快编译速度
         * @see https://theme-plume.vuejs.press/config/basic/#cache
         */
        cache: 'filesystem',

        /* 本地搜索, 默认启用 */
        search: { provider: 'local' },

        /**
         * 评论 comments
         * @see https://theme-plume.vuejs.press/config/plugins/comments/
         */
        comment: {
            provider: 'Giscus', // "Artalk“ | "Giscus" | "Twikoo" | "Waline"
            comment: true,
            repo: 'baicaizhale/giscus',
            repoId: 'R_kgDOOcAMCg',
            category: 'Announcements',
            categoryId: 'DIC_kwDOOcAMCs4CpPhZ',
        },

        /**
         * 资源链接替换
         * @see https://theme-plume.vuejs.press/guide/features/replace-assets/
         */
        // replaceAssets: 'https://cdn.example.com',

        /**
         * 加密功能
         * @see https://theme-plume.vuejs.press/guide/features/encryption/
         */
        // encrypt: {},

        // 使用标准的 VuePress sidebar 配置方式
        sidebar: {
            '/notes/CDKer/': [ // 此侧边栏配置将应用于 /notes/CDKer/ 路径下的所有页面
                { text: 'CDKer主页', link: '/notes/CDKer/' },
                { text: '引言与概述', link: '/notes/CDKer/引言与概述' }, // 修正路径
                { text: '主要特性', link: '/notes/CDKer/主要特性' }, // 修正路径
                { text: '安装指南', link: '/notes/CDKer/安装指南' }, // 修正路径
                { text: '配置文件详解', link: '/notes/CDKer/配置文件详解' }, // 修正路径
                {
                    text: '配置文件',
                    collapsed: false,
                    prefix: '/notes/CDKer/配置文件/', // 修正：prefix 指向实际文件夹路径
                    items: [
                        { text: 'cdk.yml', link: 'cdk.yml.md' }, // 修正：link 对应文件名，带 .yml
                        { text: 'used_codes.yml', link: 'used_codes.yml.md' }, // 修正：link 对应文件名，带 .yml
                        { text: '语言配置', link: '语言配置' } // 修正：link 对应文件名
                    ]
                },
                {
                    text: '命令与权限',
                    collapsed: false,
                    prefix: '/notes/CDKer/命令与权限/', // 修正：prefix 指向实际文件夹路径
                    items: [
                        { text: '命令使用说明', link: '命令使用说明' }, // 修正：link 对应文件名
                        { text: '权限节点', link: '权限节点' },
                        { text: '玩家命令', link: '玩家命令' },
                        { text: '管理员命令', link: '管理员命令' }
                    ]
                },
                {
                    text: '开发指南',
                    collapsed: false,
                    prefix: '/notes/CDKer/开发指南/', // 修正：prefix 指向实际文件夹路径
                    items: [
                        { text: 'plugins.yml', link: 'plugins.yml' }, // 修正：link 对应文件名，带 .yml
                        { text: '开发与贡献', link: '开发与贡献' }, // 修正：link 对应文件名
                        { text: '许可证', link: '许可证' } // 修正：link 对应文件名
                    ]
                }
            ],
            // 其他页面的侧边栏可以继续添加
        }
    })
})
